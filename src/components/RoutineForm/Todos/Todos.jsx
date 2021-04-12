import React from 'react';

function Todos({ todos, onTodoClick }) {
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id} onClick={() => onTodoClick(todo)}>
                    {todo.text}
                </div>
            ))}
        </div>
    );
}

export default Todos;
