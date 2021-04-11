import React from 'react';

function Todos({ todos, onTodoClick }) {
    return (
        <div>
            {todos.map((todo) => (
                <div onClick={(e) => onTodoClick(e, todo)}>{todo.text}</div>
            ))}
        </div>
    );
}

export default Todos;
