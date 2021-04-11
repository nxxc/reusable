import React, { useState } from 'react';
import Todos from './Todos/Todos';

import { useDispatch, useSelector } from 'react-redux';
import { addRoutine } from '../../redux/routinesSlice';

import styles from './styles.module.css';

import { Button, ButtonGroup, Input, List, ListItem } from '@material-ui/core';

import { nanoid } from 'nanoid';
import { addTodo } from '../../redux/todosSlice';
import { closeDrawer } from '../../redux/store';

function RoutineForm() {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [currentItem, setCurrentItem] = useState([]);

    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const onTodoClick = (todo) => {
        setCurrentItem((state) =>
            currentItem.includes(todo) ? state : [...state, todo]
        );
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const addItem = (e) => {
        if (value === '') return;
        setCurrentItem((state) => {
            return [
                ...state,
                {
                    id: nanoid(),
                    text: value,
                },
            ];
        });
        dispatch(addTodo(value));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setValue('');
    };

    const onSave = (current) => {
        dispatch(
            addRoutine({
                title,
                current,
            })
        );
        setCurrentItem([]);
        setTitle('');
        dispatch(closeDrawer());
    };
    return (
        <div className={styles.container}>
            <form className={styles.routineContainer} onSubmit={onSubmit}>
                <Input
                    id='title'
                    type='text'
                    placeholder='add title...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <List>
                    {currentItem.map((item) => (
                        <ListItem>{item.text}</ListItem>
                    ))}
                </List>
                <Input
                    id='item'
                    type='text'
                    value={value}
                    placeholder='add item...'
                    onChange={handleChange}
                />
                <ButtonGroup>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={addItem}
                        type='submit'
                    >
                        add item
                    </Button>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => onSave(currentItem)}
                    >
                        save routine
                    </Button>
                </ButtonGroup>
            </form>
            <section className={styles.todosContainer}>
                <Todos todos={todos} onTodoClick={onTodoClick} />
            </section>
        </div>
    );
}

export default RoutineForm;
