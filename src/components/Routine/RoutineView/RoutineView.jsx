import { Paper, List, ListItem, Checkbox } from '@material-ui/core';

import React from 'react';
import styles from './style.module.css';

function RoutineView({ routine }) {
    return (
        <Paper className={styles.item}>
            <h1>{routine.title}</h1>
            <List>
                {routine.todos.map((todo) => (
                    <ListItem key={todo.id}>
                        <Checkbox />
                        {todo.text}
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default RoutineView;
