import { Button } from '@material-ui/core';
import React from 'react';
import Routine from '../../Routine/Routine';
import styles from './styles.module.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Contents({ routines, setDrawerOpen }) {
    return (
        <section className={styles.container}>
            {routines.map((routine) => (
                <Routine key={routine.id} routine={routine} />
            ))}

            <Button onClick={setDrawerOpen} className={styles.addButton}>
                <AddCircleOutlineIcon />
            </Button>
        </section>
    );
}

export default Contents;
