import React, { useEffect, useState, } from 'react';
import ItemList from './itemList/ItemList';
import { customPromise } from '../../../customPromise';
//Firebase
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
//Import Spinner
import FadeLoader from "react-spinners/FadeLoader";
import { productos } from '../../../stockProductos';
//Hook useParams (traer cont IdCategoria)
import { useParams } from "react-router-dom";



//Funcion Componente "ItemListContainer"
const ItemListContainer = () => {

    let { IdCategoria } = useParams()


    //State
    const [products, setProducts] = useState([])

    useEffect(() => {

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos')



        if (IdCategoria) {
            const queryFilter = query(queryCollection, where('categoria', '==', IdCategoria))
            getDocs(queryFilter)
                .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))

        } else {
            getDocs(queryCollection)
                .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }

    }, [IdCategoria])



    return (
        <div className='ItemListContainer' style={styles.ItemListContainer}>

            <h3 style={styles.titlCateg}>{IdCategoria}</h3>
            <ItemList products={products} />

        </div>
    )
}

//ESTILOS CSS
const styles = {
    ItemListContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
    },


    titlCateg: {
        margin: "0px 0 45px 0",
        paddingBottom:'5px',
        fontSize: '25px',
        borderBottom: '2px solid #F4D03F',
    }

}

export default ItemListContainer