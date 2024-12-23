import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiLogoFacebookSquare, BiCategory, BiHome, BiBook, BiChat, BiLogIn, BiNote, } from 'react-icons/bi'
import './navbar.css'
import profile from '/images/4.jpg'

export default function Navbar() {
  const [Open, setOpen] = useState(false);

  const close = () => {
    setOpen(!Open)
  }

  const HandleClick = () => {
    
  }

  return (
    <div className='navbar__container'>
      <div className="logo">
        <span className='x'>X</span><span className='lent'>lent</span>
      </div>
      <div className="navmenu" onClick={close}>
        <ul>
          <li>
            <Link to="/">
              <BiHome className='icon-nav' />
              <p>Accueil</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <BiBook className='icon-nav' />
              <p>Postes</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <BiCategory className='icon-nav' />
              <p>Categories</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <BiNote className='icon-nav' />
              <span>Ecrire</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="profile-box">
        <ul>
          <li>
            <Link to="/">
              <BiChat id='chat' className='icon' />
              <label htmlFor="chat">Messenger</label>
            </Link>
          </li>
          <li>
            <Link to="/">
              <BiLogIn id='chat' className='icon' />
              <label htmlFor="chat">login</label>
            </Link>
          </li>
        </ul>
        <div className="profile">
          <div className="img">
            <img src={profile} alt="" />
          </div>
          <div className="menu" onClick={HandleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
