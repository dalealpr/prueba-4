import React from 'react';
import ItemListContainer from '../containers/itemListContainer/ItemListContainer';

const MainIndex = ({greeting}) => {
    return (
        <div className='mainIndex-container' style={styles.mainIndex}>
            <div style={styles.desc}>
                <p style={styles.descP}>Descuentos hasta del 50% solo por el sitio web</p>
            </div>

            <h2 style={styles.productos}>Productos</h2>

            <ItemListContainer greeting={greeting}/>
        </div>
    )
}

//ESTILOS CSS
const styles = {
    mainIndex:{
        gridArea: 'mainIndex',
        padding:'0px 0',
        color:'black',
        display: 'flex',
        flexDirection:'column',
        textAlign:'center',
        backgroundColor: '#ebebeb',
    },

    desc: { 
        height: '65px',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    descP: { 
        fontWeight: '500',
        fontSize: '19px',
    },

    productos:{
        marginTop: '50px',
        paddingBottom: '10px',
        fontWeight: '700',
        fontSize: '24px',
        borderBottom: '2px solid #F4D03F ',
    }

}
export default MainIndex