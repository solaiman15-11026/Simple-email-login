
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init'
import './Header.css'

const auth = getAuth(app)

const Header = () => {

    const [user] = useAuthState(auth)
    return (
        <div className='Header'>
            <nav >
                <Link className='na' to="/" >Home</Link>
                <Link className='na' to="/order">Order</Link>
                <Link className='na' to="/products">Products</Link>
                {
                    user?.email ? <button onClick={() => signOut(auth)}> Sign out</button> :
                        <Link className='na' to="/login">Login</Link>
                }
                <Link className='na' to="/register">Register</Link>
                <Link className='na' to="/order">Order</Link>
            </nav>
        </div>
    );
};

export default Header;