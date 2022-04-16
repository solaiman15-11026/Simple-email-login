import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hook/useFirebase';
import './Header.css'
const Header = () => {
    const { user, handleSignout } = useFirebase();
    return (
        <div className='Header'>
            <nav >
                <Link className='na' to="/" >Home</Link>
                <Link className='na' to="/order">Order</Link>
                <Link className='na' to="/products">Products</Link>
                {
                    user?.email ? <button onClick={handleSignout}> Sign out</button> :
                        <Link className='na' to="/login">Login</Link>
                }
                <Link className='na' to="/register">Register</Link>
            </nav>
        </div>
    );
};

export default Header;