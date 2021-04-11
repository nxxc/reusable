import React from 'react';

function Todos({ todos, onTodoClick }) {
    return (
        <div>
            {todos.map((todo) => (
                <div onClick={() => onTodoClick(todo)}>{todo.text}</div>
            ))}
        </div>
    );
}

export default Todos;
