import React from 'react'
import { Link } from 'react-router-dom'
import './Header_31.scss'
import { ReactComponent as Logo} from '../assets/crown.svg'

const Header_31 = () => {
    return (
        <div>
            <div className='header'>
                <Link to='/' className='logo container'>
                     <Logo />
                    </Link>
            <div className='options'>
                <Link to='/shop_31' className='option'>
                    Shop
                </Link>
                <Link to='/contact_31' className='option'>
                    Contact
                </Link>
                <Link to='/signin_31' className='option'>
                    Sign In
                </Link>
                </div>
            </div>
        </div>
        
    );
};

export default Header_31;