import { Paper, List, ListItem, Checkbox } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import { getItems, toggleItem } from '../../redux/service/itemsService';
import styles from './style.module.css';

function Routine({ routine }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getItems(routine.id).then((res) => {
            setItems(res);
        });
    }, [routine.id]);

    const onChange = (todo) => {
        const newItems = items.map((item) => {
            if (item.id === todo.id) {
                toggleItem(item.id, !item.done);
                return {
                    ...item,
                    done: !item.done,
                };
            }
            return item;
        });
        setItems(newItems);
    };
    return (
        <Paper className={styles.item}>
            <h1>{routine.title}</h1>
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
