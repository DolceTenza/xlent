import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'


export const Login = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <div className="left">
            <div className="backdrop"></div>
            <div className="content">
              <h1>Student media</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, incidunt?</p>
              <div className="btn-box">
                <p>N'avez-vous pas de compte ?</p>
                <Link to='/register'>Créer un compte</Link>
              </div>
            </div>
          </div>
          <div className="right">
            <form action="#">
              <h1>Se connecter</h1>
              <div className="input-box">
                <input type="email" placeholder='E-mail' name='email' />
              </div>
              <div className="input-box">
                <input type="text" placeholder='Mot de passe' name='password' />
              </div>
              <div className="btn-login">
                <button type='submit' className='btn-sub'>connexion</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
