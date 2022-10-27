import React from 'react';
//Import Components


const Usuario = () => {
    return (
        <div style={styles.formBack} className='usuario-container'>
            <form style={styles.form} >
                <h3 style={styles.title}>Inicia sesion</h3>

                <div style={styles.formSec} className="usuario">
                    <label>Nombre de Usuario</label>
                    <input style={styles.inputs} type="text" required/>
                </div>

                <div style={styles.formSec} className="usuario">
                    <label>Contraseña</label>
                    <input style={styles.inputs} type="password" required/>
                </div>

                <a style={styles.olvPw} href="#">Olvidaste la contraseña?</a>

                <input style={styles.btnx} className="boton-ingresar" type="submit" value="Ingresar"/>

                    <a style={styles.olvPw} href="#">Crear cuenta</a>

            </form>
        </div>
    )
}



//ESTILOS CSS
const styles = {

    formBack:{
        width: '100%',
        height: '650px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        background: 'url("https://i.ibb.co/BzsGnLB/fondo-usuario.jpg")',
    },

    form:{
        width: '350px',
        height: '480px',
        backgroundColor: 'white',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
    },

    title:{
        width: '100%',
        margin: '25px 0',
        textAlign: 'center',
        fontSize: '22px',
        color: '#949494',
        fontWeight: '500',
        paddingBottom: '20px',
        borderBottom: '1px solid #cacaca',
    },

    formSec:{
        margin: '20px 40px',
        fontSize: '15px',
        color: '#878787',
        fontWeight: '500',
        display: 'flex',
        flexDirection: 'column',
    },

    inputs: {
        fontSize: '15px',
        marginTop: '15px',
        paddingBottom: '8px',
        borderBottom: '2px solid #7c7c7c',
    },

    olvPw:{
        width: '100%',
        textAlign: 'center',
        margin: '15px 0',
        marginTop: '16px',
        color: '#6d6d6d',
    },

    btnx: {
        margin: '0 40px',
        height: '40px',
        backgroundColor: '#F4D03F',
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: '500',
    },
}
export default Usuario