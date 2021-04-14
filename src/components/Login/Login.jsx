import React from 'react';
import { useHistory } from 'react-router';

function Login({ authService, user }) {
    const onLogin = (e) => {
        const { provider } = e.target.dataset;
        authService.login(provider).then((res) => console.log(res));
    };

    return (
        <>
            <section onClick={onLogin}>
                <button data-provider='Google'>login with google</button>
                <button data-provider='Github'>login with github</button>
            </section>
        </>
    );
}

export default Login;
