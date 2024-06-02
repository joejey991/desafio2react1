import React from 'react';
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";

const Registro = () => {
    return (
        <div className="container">
            <h1>Crea una cuenta</h1>
            <div className="d-flex justify-content-center mb-4">
                <SocialButton icon="facebook" />
                <SocialButton icon="twitter" />
                <SocialButton icon="google" />
            </div>
            <Formulario />
        </div>
    );
};

export default Registro;