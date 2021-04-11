import React, { useState } from 'react';
import { Button, Drawer } from '@material-ui/core';
import RoutineForm from '../RoutineForm/RoutineForm';
import RoutineView from './RoutineView/RoutineView';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

function Routine() {
    const [open, setOpen] = useState(false);
    const routines = useSelector((state) => state.routine);

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
