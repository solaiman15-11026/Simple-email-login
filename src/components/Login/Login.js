import React from 'react';
import useFirebase from '../Hook/useFirebase';

const Login = () => {

    const { signInWithGoogle } = useFirebase();


    return (
        <div>
            <h1>Login From</h1>
            <button onClick={signInWithGoogle}>Google sign in</button>
            <form  >
                <input type="email" placeholder='email' /> <br />
                <input type="password" name="" id="" placeholder='password' /> <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Login;