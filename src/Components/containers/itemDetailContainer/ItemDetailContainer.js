import React, { useEffect, useState } from 'react';
//Hook useParams (traer cont IdCategoria)
import { useParams } from "react-router-dom";
//Import Spinner
import BarLoader from "react-spinners/BarLoader";
//Firebase
import { getFirestore, doc, getDoc } from 'firebase/firestore';
//JQuery
import $ from 'jquery';
import { productos } from '../../../stockProductos';
import { customPromise } from '../../../customPromise';
import Item2 from './intemDetail/item2';

const ItemDetailContainer = () => {

    //JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $(".spinner").fadeOut(0);
        }, 1600);
    });

    //State
    const [producto, setProducts] = useState([])
    let [loading, setLoading] = useState([true]);
    const { IdProducto } = useParams();

    //solucion 1
    useEffect(() => {

        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', IdProducto)



        getDoc(queryDoc)
            .then(res => setProducts({ id: res.id, ...res.data() }))

    }, [IdProducto])


    console.log(producto);
    return (

        <div className='ItemDetailContainer' style={styles.ItemDetailContainer} >
            <div className='spinner' style={styles.spinCont}>
                <div style={styles.contText}>
                    <p style={styles.text}>Cargando...</p>
                    <BarLoader color="#F4D03F" height={7} width={250} />
                </div>

            </div>
            <Item2 item={producto} />
        </div>
    )
}

//ESTILOS CSS
const styles = {
    ItemDetailContainer: {
        width: '100%',
        padding: '40px 0px',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    spinCont: {
        width: '100%',
        height: '70%',
        position: 'absolute',
        backgroundColor: 'black',


        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },


    contText: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '200px',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    text: {
        marginBottom: '20px',
        color: 'white',
        fontSize: '20px'
    },
}

export default ItemDetailContainer