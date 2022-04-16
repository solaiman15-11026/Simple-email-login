import React from 'react';
import useFirebase from '../Hook/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>This is Home!!!</h2>
            <p>The user is: {user ? user.displayName : 'No-one'}</p>
        </div>
    );
};

export default Home;