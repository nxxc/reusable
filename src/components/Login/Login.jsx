import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { login } from '../../redux/slices/userSlice';

function Login({ authService }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogin = async (e) => {
        const { provider } = e.target.dataset;
        const { user } = await authService.login(provider);

        const currentUser = {
            uid: user.uid || '',
            userName: user.displayName || '',
            email: user.email || '',
            photoURL: user.photoURL || '',
        };

        dispatch(login(currentUser));

        history.push('/app');
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
