//Hook States
import React, { useEffect, useState } from 'react';
//Import Link Router
import { Link, NavLink } from "react-router-dom";
//Import Context
import { useCartContext } from '../../../../context/CartContext';
import ItemCount from './itemCount/ItemCount';//Import SweetAlerts
import Swal from 'sweetalert2';


const ItemDetail = ({ item, stock, }) => {

    //State
    const [irCarrito, setIrCarrito] = useState(false)
    const { agregarProducto } = useCartContext();

    //Funcion onAdd Agregar al carrito
    const onAdd = (count) => {
        //Funcion Agregar Producto
        agregarProducto(item, count)
        console.log('Numero Producto(s): ' + count)


        //Alert
        window.Swal = Swal

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: count + ' Producto(s) Agregado(s)',
            showConfirmButton: false,
            timer: 1500
        })

        setIrCarrito(true)
    }

    return (
        < div className='itemDetail' style={styles.ItemDetail}>

            <div style={styles.DetailCont}>

                <img style={styles.DetailImg} src={item.img} />

                <div style={styles.DetailContText}>
                    <h4 style={styles.h4}>{item.nombre}</h4>
                    <p style={styles.precio}>${item.precio}</p>
                    <p style={styles.parrafo}>{item.descrp}</p>

                    {/* if Ternario Cambio Count por Boton */}
                    {irCarrito ? <Link to='/cart' style={styles.linkcount}> <button style={styles.countBtnCart} >Terminar Compra</button></Link> :
                        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    )
}

const styles = {
    ItemDetail: {
        width: '65%',
        padding: '60px 80px',
        backgroundColor: '#333333',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },


    h4: {
        width: '100%',
        fontSize: '30px',
        marginBottom: '30px',
        paddingBottom: '20px',
        borderBottom: '1px solid #F4D03F',
    },

    DetailCont: {
        display: 'grid',
        height: '460px',
        gridTemplateColumns: "repeat(2, 1fr)",
        padding: '40px 70px',
        gap: '90px',
    },

    DetailContText: {
        width: '600px',
    },

    DetailImg: {
        width: '370px',
    },

    precio: {
        width: '100%',
        fontSize: '30px',
        marginBottom: '30px',
        fontWeight: '500',
        paddingBottom: '20px',
        borderBottom: '1px solid #F4D03F',
    },

    parrafo: {
        marginTop: '30px',
        textAlign: 'left',
        paddingBottom: '20px',
        borderBottom: '1px solid #F4D03F',
    },


    //Btn Agregar al carrito
    countBtnCart: {
        marginTop: '60px',
        padding: '13px 26px',
        backgroundColor: '#F4D03F',
        color: 'black',
        fontSize: '16px',
        fontWeight: '500',
        borderRadius: '4px',
    },

    linkcount:{
        display: 'flex',
        justifyContent: 'center',
    },

}
export default ItemDetail;