import React from 'react'
import { useState } from 'react'

const formulario = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userRetryPassword, setUserRetryPassword] = useState('')

  const validateForm = (e) =>{
    e.preventDefault()
    if (userName == '' || userEmail=='' || userPassword == '' || userRetryPassword== '') return alert('debes completar todos los campos del formulario')
    if (userPassword !== userRetryPassword) return alert('Las contraseñas deben ser iguales')
    if (userName.length < 2) return alert('el largo minimo del nombre no se cumple')
    return alert('datos ingresados correctos')
  }

  return (
    <>
      <h5>O usa tu email para registrarte</h5>
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
