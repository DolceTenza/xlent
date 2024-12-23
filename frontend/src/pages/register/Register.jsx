import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'


export const Register = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <div className="gauche">
            <form action="#">
              <h1>S'inscrire</h1>
              <div className="input-box">
                <input type="text" placeholder='Nom complet' name='name' />
              </div>
              <div className="input-box">
                <input type="email" placeholder='E-mail' name='email' />
              </div>
              <div className="input-box">
                <input type="password" placeholder='Mot de passe' name='password' />
              </div>
              <div className="input-box">
                <input type="password" placeholder='Confirmation de mot de passe' name='password2' />
              </div>
              <div className="btn-login">
                <button type='submit' className='btn-sub'>inscription</button>
              </div>
            </form>
          </div>
          <div className="droite">
            <div className="backdrop"></div>
            <div className="content">
              <h1>Student media</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, incidunt?</p>
              <div className="btn-box">
                <p>Aez-vous déjà un compte ?</p>
                <Link to='/login'>Connectez-vous !</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

