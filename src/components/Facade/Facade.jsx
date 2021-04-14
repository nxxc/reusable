import React, { useEffect } from 'react';
import { Button, Drawer } from '@material-ui/core';
import RoutineForm from '../RoutineForm/RoutineForm';
import RoutineView from '../Routine/Routine';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { openDrawer, closeDrawer } from '../../redux/store';
import { fetchRoutines } from '../../redux/service/routineService';
import FbRepository from '../../redux/repository/firebaseRepository';

const repo = new FbRepository();

function Facade() {
    const isOpen = useSelector((state) => state.base.isOpen);
    const routines = useSelector((state) => state.routine);
    const dispatch = useDispatch();

    const setDrawerOpen = () => dispatch(openDrawer());

    useEffect(() => {
        dispatch(fetchRoutines());
    }, [dispatch]);

    const setDrawerClose = (anchor, open) => (event) => {
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
        </>
    );
}

export default Facade;
