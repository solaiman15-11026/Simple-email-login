import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

const auth = getAuth(app)

const Login = () => {

    const [signInWithGoogle, user] = useSignInWithGoogle(auth)



    return (
        <div>
            <h1>Login From</h1>
            <button onClick={() => signInWithGoogle()}>Google sign in</button>
            <form  >
                <input type="email" placeholder='email' /> <br />
                <input type="password" name="" id="" placeholder='password' /> <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Login;