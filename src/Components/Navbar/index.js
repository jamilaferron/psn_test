import React, { useState} from 'react'; 
import './Navbar.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import mobileLogo from '../../Assets/images/GCNLogoTxt.svg';
import { SidebarData } from '../../Data/Data';

const Sidebar = () => {
    const top_links = [
        {
            "title": "Events",
            "url":"https://www.gcnevents.co"
        },
        {
            "title": "Club",
            "url":"https://www.gcnclub.com"
        },
        {
            "title": "Shop",
            "url":"https://shop.globalcyclingnetwork.com"
        },
        {
            "title": "YouTube",
            "url":"https://www.youtube.com/user/globalcyclingnetwork?sub_confirmation=1"
        },
    ]


    const [sidebar, setSidebar] = useState(false)
    const [subnav, setSubnav] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    const showSubnav = () => setSubnav(!subnav)
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-top'>
                    <Link to='/' className='navbar-logo'>
                        <img alt="logo" className="mobile-logo" src={mobileLogo} />
                    </Link>
                </div>
                <ul className='top-links'>
                    {top_links.map((link, index) => {
                        return (
                            <li className='nav-top-item' key={index}>
                                <a href={link.url} className='nav-top-link'>
                                    {link.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        
            <nav className='sidebar-navbar'>
                <div className='search-container'>
                    <input type="text" placeholder='Search for videos' />
                    <div className='search-icon'><FaIcons.FaSearch color='#fff'/></div>
                </div>
                <div className='menu-icon'>
                    {sidebar ? <FaIcons.FaTimes color='#fff' onClick={showSidebar}/> : <FaIcons.FaBars color='#fff' onClick={showSidebar}/>}
                </div>
                <div className={sidebar ? 'sidebar-nav  active' : 'sidebar-nav'}>
                    <div className='sidebar-wrapper'>
                        {SidebarData.map((item, index) => {
                            return(
                                <>
                                    <a href={item.path} className='sub-menu-link'>
                                        <div className='sub-menu-item'>
                                            {item.title}
                                        </div>
                                    </a>
                                    <div onClick={showSubnav} className='dropdown-icon'>
                                        {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                                    </div>
                                
                                    {subnav && item.subNav && item.subNav.map((item, index) => {
                                        return (
                                            <a href={item.path} className='sub-menu-link' key={index}>
                                                <div className='sub-menu-item'>
                                                    {item.title}
                                                </div>
                                            </a>
                                        )
                                    })}
                                </>
                            )
                        })}
                    </div>
                </div>
            </nav>
        </>
    );
}
 
export default Sidebar;
