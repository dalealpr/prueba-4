//Hook States
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//Import Spinner
import BarLoader from "react-spinners/BarLoader";
//JQuery
import $ from 'jquery';

const FinalCompra = ({idProp}) => {

    console.log('IDPROP: ',idProp)

    //JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $(".spinner").fadeOut(600);
        }, 3000);
    });


    return (
        <div className='FormFinal-container' style={styles.mainForm}>
            <div style={styles.alertCont}>

                <div className='spinner' style={styles.spinCont}>
                    <div style={styles.contText}>
                        <p style={styles.text}>Cargando...</p>
                        <BarLoader color="#F4D03F" height={7} width={300} />
                    </div>
                </div>

                <p style={styles.alertText}>Compra Finalizada con Exito</p>
                <p style={styles.alertText2}>ID orden de compra: </p>
                <p style={styles.alertId}>{idProp}</p>
                <Link to='/' style={styles.btnPr}>Volver a Home</Link>
            </div>
        </div>
    )
}

//ESTILOS CSS
const styles = {

    mainForm: {
        width: '100%',
        height: '800px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        background: 'url("https://i.ibb.co/BzsGnLB/fondo-usuario.jpg")',
    },

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
export default FinalCompra