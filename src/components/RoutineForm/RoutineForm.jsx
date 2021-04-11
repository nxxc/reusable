import React, { useRef, useState } from 'react';

import { addTodo } from '../../redux/todosSlice';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.css';
import Todos from './Todos/Todos';
import { Button } from '@material-ui/core';
import { addRoutine } from '../../redux/routinesSlice';
import { addItem } from '../../redux/itemsSlice';

function RoutineForm() {
    const inputRef = useRef();
    const todos = useSelector((state) => state.todo);
    const items = useSelector((state) => state.item);
    const dispatch = useDispatch();
    // const [todos, setTodos] = useState(initalTodos);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = inputRef.current.value;
        dispatch(addTodo(text));
        dispatch(addItem(text));
        inputRef.current.value = '';
    };

    const onTodoClick = (todo) => {
        console.log(todo);
    };

    const onSave = (current) => {
        dispatch(addRoutine(current));
    };
    return (
        <div className={styles.container}>
            <section className={styles.routineContainer}>
                {items.length
                    ? items.map((todo) => <li key={todo}>{todo.text}</li>)
                    : 'add todo'}
                <form type='submit' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='add todo...'
                        ref={inputRef}
                    ></input>
                </form>
                <Button onClick={() => onSave(items)}>save</Button>
            </section>
            <section className={styles.todosContainer}>
                <Todos todos={todos} onTodoClick={onTodoClick} />
            </section>
        </div>
    );
}

export default RoutineForm;
