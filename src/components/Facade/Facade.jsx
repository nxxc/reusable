import React, { useEffect } from 'react';
import { Button, Drawer } from '@material-ui/core';
import RoutineForm from '../RoutineForm/RoutineForm';
import RoutineView from '../Routine/Routine';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { openDrawer, closeDrawer } from '../../redux/store';
import { fetchRoutines } from '../../redux/service/routineService';
import { useHistory } from 'react-router';
import { logout } from '../../redux/slices/userSlice';

function Facade({ authService, db }) {
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
        dispatch(fetchRoutines());
    }, [dispatch]);

    useEffect(() => {
        if (!user) {
            history.push('/');
        }
    }, [history, user]);

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
            <section className={styles.container}>
                {routines.map((routine) => (
                    <RoutineView
                        key={routine.id}
                        className={styles.item}
                        routine={routine}
                    />
                ))}

                <Button
                    onClick={setDrawerOpen}
                    className={styles.addButton}
                    variant='contained'
                >
                    Add
                </Button>
            </section>
            <Drawer
                anchor='right'
                open={isOpen}
                onClose={setDrawerClose('right', false)}
            >
                <RoutineForm />
            </Drawer>
            <button onClick={onLogout}>logout</button>
        </>
    );
}

export default Facade;
