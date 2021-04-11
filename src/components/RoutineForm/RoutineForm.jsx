import React, { useRef, useState } from 'react';
import styles from './styles.module.css';
import Todos from './Todos/Todos';

function RoutineForm() {
    const inputRef = useRef();
    const [current, setCurrent] = useState([]);
    const [todos, setTodos] = useState([
        { id: 1, text: 'hello' },
        { id: 2, text: 'bye' },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = inputRef.current.value;

        //현재 추가하는게 todos에 없으면 추가
        setTodos((state) => {
            const allTodos = todos.map((todo) => todo.text);
            if (!allTodos.includes(text)) {
                return [...state, { id: new Date(), text }];
            }
            return state;
        });

        setCurrent((state) => {
            const allTodos = current.map((todo) => todo.text);
            if (allTodos.includes(text)) {
                return state;
            }

            return [...state, { id: new Date(), text }];
        });
        inputRef.current.value = '';
    };

    const onTodoClick = (e, todo) => {
        e.preventDefault();

        // 모든 현재 todo만들어서 있으면 추가 x
        const allTodos = current.map((todo) => todo.text);
        if (allTodos.includes(todo.text)) return;
        setCurrent((state) => {
            return [...state, todo];
        });
        console.log(todo);
    };
    return (
        <div className={styles.container}>
            <section className={styles.routineContainer}>
                {current.length
                    ? current.map((todo) => <li key={todo}>{todo.text}</li>)
                    : 'add todo'}
                <form type='submit' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='add todo...'
                        ref={inputRef}
                    ></input>
                </form>
            </section>
            <section className={styles.todosContainer}>
                <Todos todos={todos} onTodoClick={onTodoClick} />
            </section>
        </div>
    );
}

export default RoutineForm;
