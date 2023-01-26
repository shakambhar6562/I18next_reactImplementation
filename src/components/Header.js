import React from 'react';
import Logos from './images/robinlogo.png';
import './Header.css';
import {Link} from 'react-router-dom';
function Header()
{

    return (
        <div className='Header'>
            <img src={Logos} alt="" className="logo" />
            <ul>
                <Link to="/login">
                    <li>Home</li>
                </Link>
                <Link>
                    <li>About</li>
                </Link>
                <Link to="/login">
                    <li>Login</li>
                </Link>
            </ul>
           
        </div>
    );

}
export default Header;