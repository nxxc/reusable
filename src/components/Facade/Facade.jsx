import React, { useEffect } from 'react';
import { Button, Drawer } from '@material-ui/core';
import RoutineForm from '../RoutineForm/RoutineForm';
import RoutineView from '../Routine/Routine';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { openDrawer, closeDrawer } from '../../redux/store';
import { fetchRoutines } from '../../redux/service/routineService';

function Facade() {
    const isOpen = useSelector((state) => state.base.isOpen);
    const dispatch = useDispatch();
    const routines = useSelector((state) => state.routine);

    const toggleOpen = () => dispatch(openDrawer());

    useEffect(() => {
        dispatch(fetchRoutines());
    }, [dispatch]);

    const toggleDrawer = (anchor, open) => (event) => {
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
                    <RoutineView className={styles.item} routine={routine} />
                ))}

                <Button
                    onClick={toggleOpen}
                    className={styles.addButton}
                    variant='contained'
                >
                    Add
                </Button>
            </section>
            <Drawer
                anchor='right'
                open={isOpen}
                onClose={toggleDrawer('right', false)}
            >
                <RoutineForm />
            </Drawer>
        </>
    );
}

export default Facade;
