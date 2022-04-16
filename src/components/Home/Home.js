import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app)

const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>This is Home!!!</h2>
            <p>The user is: {user ? user.displayName : 'No-one'}</p>
        </div>
    );
};

export default Home;