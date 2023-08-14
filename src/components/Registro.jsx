import { useState } from 'react';
import Alert from './Alert';
import Formulario from './Formulario';
import SocialButton from './SocialButton';

const Registro =({alert, setAlert}) => {
    
    return (
   <>
        <div className="registroform">
        <h2>Crea una cuenta</h2>
        <SocialButton icon= "fa-brands fa-square-facebook" />
        <SocialButton icon= "fa-brands fa-github-alt" />
        <SocialButton icon= "fa-brands fa-linkedin" />
        <Formulario setAlert={setAlert}/>
        {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
        </div>
        </>
    );
};

export default Registro;