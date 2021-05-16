import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
// import { login } from '../../redux/slices/userSlice';
import '@lottiefiles/lottie-player';

// const userMaker = (user) => {
//     const result = {
//         uid: user.uid || '',
//         userName: user.displayName || '',
//         email: user.email || '',
//         photoURL: user.photoURL || '',
//     };
//     return result;
// };

export default function () {
    const dispatch = useDispatch();
    const history = useHistory();

    // const onLogin = (e) => {
    //     if (e.target.nodeName !== 'BUTTON') return;
    //     const { provider } = e.target.dataset;
    //     authService.login(provider).then(({ user }) => {
    //         const currentUser = userMaker(user);
    //         dispatch(login(currentUser));
    //         history.push('/app');
    //     });
    // };

    return (
        <>
            <div>
                <section>
                    <lottie-player
                        autoplay
                        loop
                        mode='normal'
                        src='https://assets10.lottiefiles.com/packages/lf20_dl87KC.json'
                        // style='width: 320px'
                    ></lottie-player>
                </section>
                {/*<section className={styles.buttons} onClick={onLogin}>*/}
                {/*    <button data-provider='Google'>LoginPage with Google</button>*/}
                {/*    <button data-provider='Github'>LoginPage with Github</button>*/}
                {/*</section>*/}
            </div>
        </>
    );
}
