import React, { useState } from 'react';
//Import Components
import Header from '../header/Header';
import MainIndex from '../mainIndex/MainIndex';
//Import Spinner
import BarLoader from "react-spinners/BarLoader";
//JQuery
import $ from 'jquery';


const Home = () => {

    //JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $(".spinner").fadeOut(0);
        }, 1600);
    });


    return (

        <div className='home-container' id='homeCont' style={styles.homeCont}>

            <div className='spinner' style={styles.spinCont}>
                <div style={styles.contText}>
                    <p style={styles.text}>Cargando...</p>
                    <BarLoader color="#F4D03F" height={7} width={300} />
                </div>

            </div>
            <Header />
            <MainIndex />

        </div>
    )
}


//Estilos CSS
const styles = {

    homeCont:{
    },

    spinCont: {
        width: '100%',
        height: '357%',
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
        marginTop: '200px',
        marginBottom: '20px',
        color: 'white',
        fontSize: '22px'
    },
}


export default Home