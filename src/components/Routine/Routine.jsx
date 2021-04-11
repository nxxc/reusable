import React, { useState } from 'react';
import { Button, Drawer, Paper, StylesProvider } from '@material-ui/core';
import RoutineForm from '../RoutineForm/RoutineForm';
import RoutineView from './RoutineView/RoutineView';
import styles from './styles.module.css';

function Routine() {
    const [open, setOpen] = useState(false);
    const [routines, setRoutines] = useState([]);

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
                    <RoutineView routine={routine} />
                ))}
                <Paper>
                    <Button onClick={toggleOpen}>Add</Button>
                </Paper>
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
