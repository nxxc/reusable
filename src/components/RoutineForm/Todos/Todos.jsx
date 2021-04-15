import React from 'react';
import styles from './styles.module.css';
import { List, ListItem, Typography } from '@material-ui/core';

function Todos({ todos, onTodoClick }) {
    return (
        <section className={styles.todosContainer}>
            <header className={styles.header}>
                <Typography variant='h4'>My Item</Typography>
            </header>
            <List className={styles.list}>
                {todos.map((todo) => (
                    <ListItem
                        button
                        key={todo.id}
                        onClick={() => onTodoClick(todo)}
                    >
                        {todo.text}
                    </ListItem>
                ))}
            </List>
        </section>
    );
}

export default Todos;
