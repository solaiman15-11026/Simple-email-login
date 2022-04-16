import React from 'react';

const Register = () => {

    const handleSubmit = () => {

    }

    return (
        <div>
            <h3>Please!! Registar now!</h3>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='name' /> <br />
                <input type="email" placeholder='email' /> <br />
                <input type="password" name="" id="" placeholder='password' /> <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;