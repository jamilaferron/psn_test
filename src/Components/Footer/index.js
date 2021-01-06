import React from 'react';
import './Footer.css';
import logo from '../../Assets/images/GCNLogo.svg';
import facebook from '../../Assets/images/IconCrc_Facebook.png';
import twitter from '../../Assets/images/IconCrc_Twitter.png';
import instagram from '../../Assets/images/IconCrc_Instagram.png';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
   
      <footer className='footer'>
        <div className='footer-container'>
            <div className='footer-header'>
                <img alt="logo" className="footer-logo" src={logo} />
                <div className="social-icons">
                    <img alt="facebook" className="social-icon facebook" src={facebook} />
                    <img alt="twitter" className="social-icon twitter" src={twitter} />
                    <img alt="instagram" className="social-icon instagram" src={instagram} />
                </div>
            </div>
            <div className='footer-main'>
                <div className='footer-main-left'>
                    <ul>
                        <li className='footer-item'>
                            <Link to='/' className='footer-links'>
                                Home
                            </Link>
                        </li>
                        <li className='footer-item'>
                            <a href="mailto:info@playsportsnetwork.com" className='footer-links'>
                                info@playsportsnetwork.com
                            </a>
                        </li>
                        <li className='footer-item'>
                            <a href="https://www.globalcyclingnetwork.com/archive/full/" className='footer-links'>
                                Archive
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div className='footer-main-right'>
                    <ul>
                    <li className='footer-item'>
                            <a href="https://www.globalcyclingnetwork.com/editorial" className='footer-links'>
                                Editorial policy
                            </a>
                        </li>
                        <li className='footer-item'>
                            <a href="https://www.globalcyclingnetwork.com/privacy" className='footer-links'>
                                Privacy policy
                            </a>
                        </li>
                        <li className='footer-item'>
                            <a href="https://www.globalcyclingnetwork.com/cookie" className='footer-links'>
                                Cookie policy
                            </a>
                        </li>
                        <li className='footer-item'>
                            <a href="https://www.globalcyclingnetwork.com/terms" className='footer-links'>
                                Terms and conditions
                            </a>
                        </li>
                        <li className='footer-item'>
                            <a href="https://www.youtube.com/t/terms" className='footer-links'>
                                YouTube Terms and conditions
                            </a>
                        </li>
                        <li className='footer-item'>
                            <a href="https://www.globalcyclingnetwork.com/promotion-rules" className='footer-links'>
                                Promotion rules
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer-end'>
                <a href="https://playsportsnetwork.com" className='footer-links'>
                    &#169; 2021 Play Sports Network
                </a>
            </div>
        </div>
      </footer>
  );
}

export default Footer;
