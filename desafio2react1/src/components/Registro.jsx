import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";

const Registro = () => {
    return (
        <div>
            <h1>Crea una cuenta</h1>
            {/* Iria los iconos de facebook, google y twitter */}
            <Formulario />
            <Alert message="Mensaje de prueba" type="success"/>
        </div>
    )
}

export default Registro;