import React from 'react'
import appStore from '../../../images/Appstore.png';
import playStore from '../../../images/playstore.png';
import './Footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
        <div className="leftFooter">
            <h4>Download Our App</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={appStore} alt="appStore" />
            <img src={playStore} alt="playStore" />

        </div>
        <div className="midFooter">
            <h1>ECommerce</h1>
            <p>High Quality is our first priority</p>
            <p>Copyrights 2021 &copy; Rajan Jha</p>


        </div>
        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href='www.google.com'>Instagram</a>
            <a href='www.google.com'>YouTube</a>
            <a href='www.google.com'>Facebook</a>

        </div>

    </footer>
  )
}

export default Footer