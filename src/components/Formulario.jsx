import React from 'react'
import { useState } from 'react'
import Alert from './Alert'

const formulario = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRetryPassword, setUserRetryPassword] = useState('');

  const [userNameAlert, setUserNameAlert] = useState('');
  const [userEmailAlert, setUserEmailAlert] = useState('');
  const [userPasswordAlert, setUserPasswordAlert] = useState('');
  const [userRetryPasswordAlert, setUserRetryPasswordAlert] = useState('');

  const validateForm = (e) => {
    e.preventDefault();
    let valid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (userName === '') {
      setUserNameAlert('Debes completar el campo de nombre');
      valid = false;
    } else if (userName.length < 2) {
      setUserNameAlert('El largo mínimo del nombre no se cumple');
      valid = false;
    } else {
      setUserNameAlert('');
    }

    if (userEmail === '') {
      setUserEmailAlert('Debes completar el campo de email');
      valid = false;
    } else if (!emailPattern.test(userEmail)) {
      setUserEmailAlert('El formato del email no es correcto');
      valid = false;
    } else {
      setUserEmailAlert('');
    }

    if (userPassword === '') {
      setUserPasswordAlert('Debes completar el campo de contraseña');
      valid = false;
    } else {
      setUserPasswordAlert('');
    }

    if (userRetryPassword === '') {
      setUserRetryPasswordAlert('Debes confirmar tu contraseña');
      valid = false;
    } else if (userPassword !== userRetryPassword) {
      setUserRetryPasswordAlert('Las contraseñas deben ser iguales');
      valid = false;
    } else {
      setUserRetryPasswordAlert('');
    }

    if (valid) {
      alert('Datos ingresados correctamente');
    }
  };

  return (
    <>
      <h5>O usa tu email para registrarte</h5>
      <form onSubmit={validateForm}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Nombre"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {userNameAlert && <Alert message={userNameAlert} type="danger" />}
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="userEmail"
            placeholder="tuemail@ejemplo.com"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          {userEmailAlert && <Alert message={userEmailAlert} type="danger" />}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="userPassword"
            placeholder="Contraseña"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          {userPasswordAlert && <Alert message={userPasswordAlert} type="danger" />}
        </div>
        <div className="mb-3">
          <input type="password"
            className="form-control"
            id="userRetryPassword"
            placeholder="Confirma tu contraseña"
            value={userRetryPassword}
            onChange={(e) => setUserRetryPassword(e.target.value)}
          />
          {userRetryPasswordAlert && <Alert message={userRetryPasswordAlert} type="danger" />}
        </div>
        <button type="submit" className="btn btn-success form-control">Registrarse</button>
      </form>
    </>
  )
}

export default formulario
