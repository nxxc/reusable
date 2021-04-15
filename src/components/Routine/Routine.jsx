import { Paper, List, ListItem, Checkbox } from '@material-ui/core';

import React from 'react';
import styles from './style.module.css';

function Routine({ routine }) {
    const { title, current } = routine;
    const items = Object.values(current);

    const onChange = (todo) => {
        console.log(todo);
    };

    return (
        <Paper className={styles.item}>
            <header>
                <h1>{title}</h1>
            </header>
            <List>
                {items.map((todo) => (
                    <ListItem key={todo.id}>
                        <Checkbox
                            checked={todo.done}
                            onChange={() => onChange(todo)}
                        />
                        {todo.text}
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default Routine;
