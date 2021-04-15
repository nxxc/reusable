import React, { useEffect } from 'react';
import { Drawer } from '@material-ui/core';
import RoutineForm from '../RoutineForm/RoutineForm';
import { useDispatch, useSelector } from 'react-redux';
import { openDrawer, closeDrawer } from '../../redux/store';
// import { fetchRoutines } from '../../redux/service/routineService';
import { useHistory } from 'react-router';
import { logout } from '../../redux/slices/userSlice';
import { rfetchRoutines } from '../../redux/slices/routinesSlice';
import Contents from '../Container/Contents/Contents';
import Header from '../Container/Header/Header';

function App({ authService, db }) {
    const user = useSelector((state) => state.user);
    const isOpen = useSelector((state) => state.base.isOpen);
    const routines = useSelector((state) => state.routine);
    const history = useHistory();
    const dispatch = useDispatch();

    const setDrawerOpen = () => dispatch(openDrawer());

    const onLogout = () => {
        authService.logout();
        dispatch(logout());
        history.push('/');
    };

    useEffect(() => {
        if (!user) {
            history.push('/');
        }
    }, [history, user]);

    useEffect(() => {
        dispatch(rfetchRoutines(user.uid));
    }, [dispatch, user.uid]);

    const setDrawerClose = () => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        dispatch(closeDrawer());
    };

    return (
        <>
            {/* header? */}
            <Header onLogout={onLogout} />
            {/* contents? */}
            {/* userInfo */}
            <Contents routines={routines} setDrawerOpen={setDrawerOpen} />
            {/* data visualize */}
            <Drawer
                anchor='right'
                open={isOpen}
                onClose={setDrawerClose('right', false)}
            >
                <RoutineForm />
            </Drawer>
        </>
    );
}

export default App;
