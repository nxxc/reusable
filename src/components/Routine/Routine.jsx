import { Paper, List, ListItem, Checkbox } from '@material-ui/core';

import React, { useState } from 'react';
import styles from './style.module.css';

function Routine({ routine }) {
    const { title, current } = routine;
    const [items, setItems] = useState(Object.values(current));

    const onClick = (id) => {
        const newItems = items.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
        );
        setItems(newItems);
    };

    return (
        <Paper className={styles.item}>
            <header className={styles.header}>
                <h1>{title}</h1>
            </header>
            <section className={styles.listContainer}>
                <List>
                    {items.map((item) => {
                        console.log(item);
                        return (
                            <ListItem key={item.id}>
                                <Checkbox
                                    checked={item.done}
                                    onClick={() => onClick(item.id)}
                                />
                                {item.text}
                            </ListItem>
                        );
                    })}
                </List>
            </section>
        </Paper>
    );
}

export default Routine;
