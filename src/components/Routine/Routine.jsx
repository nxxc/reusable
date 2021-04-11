import React, { useState } from 'react';
import { Button, Drawer } from '@material-ui/core';
import RoutineForm from '../RoutineForm/RoutineForm';
import RoutineView from './RoutineView/RoutineView';
import styles from './styles.module.css';

function Routine() {
    const [open, setOpen] = useState(false);
    const [routines, setRoutines] = useState([
        {
            id: 1,
            title: 'first',
            todos: [
                { id: 1, text: 'one', done: false },
                { id: 2, text: 'two', done: false },
                { id: 3, text: 'three', done: false },
            ],
        },
        {
            id: 1,
            title: 'first',
            todos: [
                { id: 1, text: 'one', done: false },
                { id: 2, text: 'two', done: false },
                { id: 3, text: 'three', done: false },
            ],
        },
        {
            id: 1,
            title: 'first',
            todos: [
                { id: 1, text: 'one', done: false },
                { id: 2, text: 'two', done: false },
                { id: 3, text: 'three', done: false },
            ],
        },
    ]);

    const toggleOpen = () => setOpen(true);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setOpen(false);
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
                open={open}
                onClose={toggleDrawer('right', false)}
            >
                <RoutineForm />
            </Drawer>
        </>
    );
}

export default Routine;
