//Hook States
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';
//Firebase
import { addDoc, collection, getFirestore } from 'firebase/firestore';
//Import Spinner
import BarLoader from "react-spinners/BarLoader";
//JQuery
import $ from 'jquery';


const Form = () => {
    const { cart, precioTotal, limpiarCarrito } = useCartContext()

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    let [datos, setDatos] = useState({});

    const [idOrden, setIdOrden] = useState('')
    const [compraFinalizada, setCompraFinalizada] = useState(false)


    //JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $(".spinner").fadeOut(600);
        }, 3000);
    });


    // funcion Guardar formulario en un estado
    function GuardarForm() {
        const objetDatos = {
            cliente: {
                nombres,
                apellidos,
                email,
                telefono,
                direccion,
            },
            Productos: cart.map(product => ({ id: product.id, nombre: product.nombre, precio: product.precio, stock: product.stock })),
            total: precioTotal(),
        }
        setDatos = objetDatos
    }


    // funcion Pasar datos a firebase
    const handlerClick = () => {
        GuardarForm()
        const db = getFirestore();
        const orderCollection = collection(db, 'ordenes')

        addDoc(orderCollection, setDatos)
            .then(({ id }) => setIdOrden(id))
        setCompraFinalizada(true)

        limpiarCarrito()
    }

    //Validaciones Formulario
    const validate = (nombres, apellidos, email, direccion, telefono) => {

        if (nombres.length < 1) return 'Error: campo Nombres vacio'
        if (apellidos.length < 1) return 'Error: campo Apellidos vacio'
        if (telefono.length < 1) return 'Error: campo Telefono vacio'
        if (telefono.length < 8) return 'Error: Telefono debe contener al menos 8 digitos'
        if (!email.includes('@')) return 'Error: Email incorrecto'
        if (direccion.length < 1) return 'Error: campo Direccion vacio'

    }

    const errorForm = validate(nombres, apellidos, email, direccion, telefono)


    return (
        <div className='Form-container' style={styles.mainForm}>

            {compraFinalizada ?

                <div style={styles.alertCont}>

                    <div className='spinner' style={styles.spinCont}>
                        <div style={styles.contText}>
                            <p style={styles.text}>Cargando...</p>
                            <BarLoader color="#F4D03F" height={7} width={300} />
                        </div>
                    </div>

                    <p style={styles.alertText}>Compra Finalizada con Exito</p>
                    <p style={styles.alertText2}>ID orden de compra: </p>
                    <p style={styles.alertId}>{idOrden}</p>
                    <Link to='/' style={styles.btnPr}>Volver a Home</Link>
                </div>

                :

                <form style={styles.form} onSubmit={ev => {
                    ev.preventDefault();
                }} >
                    <h3 style={styles.title}>Inicia sesion</h3>

                    <div style={styles.formSec} className="usuario">
                        <label>Nombres</label>
                        <input style={styles.inputs}
                            className="datoInput"
                            type="text"
                            name='nombres'
                            value={nombres}
                            onChange={ev => setNombres(ev.target.value)}
                            required />
                    </div>

                    <div style={styles.formSec} className="usuario">
                        <label>Apellidos</label>
                        <input style={styles.inputs}
                            type="text"
                            className="datoInput"
                            name='apellidos'
                            value={apellidos}
                            onChange={ev => setApellidos(ev.target.value)}
                            required />
                    </div>

                    <div style={styles.formSec} className="usuario">
                        <label>Telefono</label>
                        <input style={styles.inputs}
                            type="telefono"
                            className="datoInput"
                            name='tel'
                            value={telefono}
                            onChange={ev => setTelefono(ev.target.value)}
                            required />
                    </div>

                    <div style={styles.formSec} className="usuario">
                        <label>Email</label>
                        <input style={styles.inputs}
                            type="email"
                            className="datoInput"
                            name='email'
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
                            required />
                    </div>

                    <div style={styles.formSec} className="usuario">
                        <label>Direccion</label>
                        <input style={styles.inputs}
                            type="text"
                            className="datoInput"
                            name='direccion'
                            value={direccion}
                            onChange={ev => setDireccion(ev.target.value)}
                            required />
                    </div>

                    <input style={styles.btnx} className="boton-ingresar" disabled={errorForm} onClick={handlerClick} type="submit" value="Ingresar" />

                    {errorForm ?
                        <p style={styles.Error}>{errorForm}</p>
                        :
                        <p></p>
                    }


                </form>
            }
        </div>
    )
}

//ESTILOS CSS
const styles = {

    alertCont: {
        width: '30%',
        height: '330px',
        backgroundColor: 'white',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    alertText: {
        fontSize: '27px',
        fontWeight: '500',
        marginBottom: '20px',
    },

    alertText2: {
        fontSize: '18px',
        fontWeight: '400',
        marginBottom: '10px',
    },

    alertId: {
        margin: '11px 0',
        fontSize: '18px',
        padding: '10px 20px',
        border: '1px solid #c3c3c3',
    },


    btnPr: {
        width: '60%',
        height: '50px',
        marginTop: '18px',
        backgroundColor: '#F4D03F',
        color: 'black',
        fontSize: '16px',
        fontWeight: '500',
        borderRadius: '4px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },

    //----------------------------------------------------------------------//

    mainForm: {
        width: '100%',
        height: '800px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        background: 'url("https://i.ibb.co/BzsGnLB/fondo-usuario.jpg")',
    },

    form: {
        width: '28%',
        height: '760px',
        backgroundColor: 'white',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
    },

    title: {
        width: '100%',
        margin: '25px 0',
        textAlign: 'center',
        fontSize: '22px',
        color: '#949494',
        fontWeight: '500',
        paddingBottom: '20px',
        borderBottom: '1px solid #cacaca',
    },

    formSec: {
        margin: '20px 40px',
        fontSize: '15px',
        color: '#878787',
        fontWeight: '500',
        display: 'flex',
        flexDirection: 'column',
    },

    inputs: {
        fontSize: '16px',
        marginTop: '15px',
        paddingBottom: '8px',
        borderBottom: '2px solid #7c7c7c',
    },

    olvPw: {
        width: '100%',
        textAlign: 'center',
        margin: '15px 0',
        marginTop: '16px',
        color: '#6d6d6d',
    },

    btnx: {
        margin: '18px 40px 0 40px',
        height: '48px',
        backgroundColor: '#F4D03F',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnx2: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F4D03F',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Error: {
        backgroundColor: '#ff7f7f',
        textAlign: 'center',
        fontSize: '15px',
        margin: '18px 40px',
        height: '38px',
        display: 'flex',
        fontWeight: '500',
        justifyContent: 'center',
        alignItems: 'center',
    },

    //----------------------------------------------------------------------//

    spinCont: {
        width: '100%',
        height: '86%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.8)',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    contText: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    text: {
        marginTop: '370px',
        marginBottom: '20px',
        color: 'white',
        fontSize: '22px'
    },

}

export default Form