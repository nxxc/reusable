import { Button } from '@material-ui/core';
import React, {useEffect} from 'react';
import Routine from '../../Routine/Routine';
import styles from './styles.module.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {closeDrawer, openDrawer} from "../../../redux/store";
import {fetchRoutinesEvent} from "../../../redux/slices/routinesSlice";
import {useDispatch, useSelector} from "react-redux";

function Contents() {
    const routines = useSelector(state => state.routine);
    const dispatch = useDispatch();

    const setDrawerOpen = () => dispatch(openDrawer());

    useEffect(() => {
        dispatch(fetchRoutinesEvent());
    }, [dispatch]);

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
