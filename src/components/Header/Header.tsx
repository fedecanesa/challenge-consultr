import React from 'react'
import Avatar from '../../assets/images/avatar.png';
import Notification from '../../assets/images/Notification.png';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className='header'>
        <div className='header__avatar--container'>
            <img src={Avatar} alt="Avatar" />
        </div>
        <div className='header__infouser'>
            <h3>Kaiden Stormwood</h3>
            <p>Podemon Trainer</p>
        </div>

        <div className='header__notification'>
            <p>2</p>
            <img src={Notification} alt="" />
        </div>
    </header>
  )
}

export default Header