import React, { useState } from 'react';
import Todos from './Todos/Todos';

import { useDispatch, useSelector } from 'react-redux';
import { addRoutineEvent } from '../../redux/slices/routinesSlice';

import styles from './styles.module.css';

import { Button, ButtonGroup, Input, List, ListItem } from '@material-ui/core';

import { addTodo } from '../../redux/slices/todosSlice';
import { closeDrawer } from '../../redux/store';
import {createItem} from "../Factory/ItemFactory";
import {createRoutine} from "../Factory/RoutineFactory";

function RoutineForm() {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [currentItem, setCurrentItem] = useState([]);

    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const onTodoClick = (todo) => {
        if (currentItem.map((item) => item.todoId).includes(todo.id)) return;
        setCurrentItem((state) => [...state, createItem(todo)]);
    };

    const addItem = (e) => {
        if (value === '') return;
        let todo;
        if (!todos.map((todo) => todo.text).includes(value)) {
            // todos에 없을 때 추가
            const action = addTodo(value);
            todo = action.payload;
            dispatch(action);
        } else {
            todo = todos.filter((todo) => todo.text === value)[0];
        }

        setCurrentItem((state) => [...state, createItem(todo)]);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setValue('');
    };

    const onSave = () => {
        const newRoutine = createRoutine(title, currentItem);

        dispatch(addRoutineEvent(newRoutine));

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
                        <ListItem key={item.id}>{item.text}</ListItem>
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
                        onClick={onSave}
                    >
                        save routine
                    </Button>
                </ButtonGroup>
            </form>
            <Todos todos={todos} onTodoClick={onTodoClick} />
        </div>
    );
}

export default RoutineForm;
