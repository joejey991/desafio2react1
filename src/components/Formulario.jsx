import React from 'react'
import { useState } from 'react'
import Alert from './Alert'

const formulario = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRetryPassword, setUserRetryPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('')

  const validateForm = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (userName == '' || userEmail == '' || userPassword == '' || userRetryPassword === '') {
      setAlertMessage('Debes completar todos los campos del formulario');
      setAlertType('danger');
      return;
    }
    if (!emailPattern.test(userEmail)) {
      setAlertMessage('El formato del email no es correcto');
      setAlertType('danger');
      return;
    }
    if (userPassword !== userRetryPassword) {
      setAlertMessage('Las Contraseñas deben ser iguales');
      setAlertType('danger');
      return;
    }
    if (userName.length < 2) {
      setAlertMessage('El largo mínimo del nombre no se cumple');
      setAlertType('danger');
      return;
    }
    setAlertMessage('Datos ingresados correctos');
    setAlertType('success');
  };

  return (
    <>
      <h5>O usa tu email para registrarte</h5>
      {alertMessage && <Alert message={alertMessage} type={alertType} />}
      <form onSubmit={validateForm}>
        <div className="mb-3">
          <input type="text" className="form-control" id="userName" placeholder="Nombre" onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" id="userEmail" placeholder="tuemail@ejemplo.com" onChange={(e)=> setUserEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="userPassword" placeholder="Contraseña" onChange={(e)=> setUserPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="userRetryPassword" placeholder="Confirma tu contraseña" onChange={(e)=> setUserRetryPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-success form-control">Registrarse</button>
      </form>
    </>
  )
}

export default formulario
