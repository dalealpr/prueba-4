import React from 'react';
//Import Components


const Contacto = () => {
    return (
        < div style={styles.cont}>
            <div style={styles.contContct} className='nosotros-container' >
                <h2 style={styles.titulo}>Contacto</h2>


                <div style={styles.contContct2} className="cont-form-contacto">
                    <label style={styles.titulos} form="name">Nombre</label>
                    <input style={styles.inputs} className="inp" type="text" name="" id="name" required />

                    <label style={styles.titulos} form="lastName">Apellido</label>
                    <input style={styles.inputs} className="inp" type="text" name="" id="lastName" required />

                    <label style={styles.titulos} form="name">Email</label>
                    <input style={styles.inputs} className="inp" type="email" name="" id="name" required />


                    <label style={styles.titulos} form="name">Telefono</label>
                    <input style={styles.inputs} className="inp" type="tel" name="" id="name" required />

                    <label style={styles.titulos} form="name">Mensaje</label>
                    <textarea style={styles.textA} name="" id="message"></textarea>

                    <input style={styles.btnEnv} className="btn" type="submit" value="Enviar" />
                </div>

            </div>
        </div>
    )
}

//ESTILOS CSS
const styles = {
    cont:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    contContct: {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    contContct2: {
        display: 'flex',
        height:'900px',
        flexDirection: 'column',
        backgroundColor: '#e4e4e4',
        marginBottom: '50px',
    },

    titulo:{
        width: '100%',
        textAlign: 'center',
        margin: '50px 0 ',
        fontSize: '27px',
    },

    titulos: {
        margin: '45px 0 20px 0',
        paddingLeft: '60px',
        fontWeight: '500',
        fontSize: '18px',
    },

    inputs:{
        width: '50%',
        height: '35px',
        marginLeft: '60px',
        paddingLeft: '10px',
        fontSize: '15px',
        border: '1px solid #949494',
    },

    textA:{
        marginLeft: '60px',
        marginBottom: '35px',
        width: '50%',
        height: '180px',
        resize: 'none',
    },

    btnEnv: { 
        marginLeft: '60px',
        width: '300px',
        height: '43px',
        backgroundColor: '#F4D03F',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '15px',

    },



}
export default Contacto