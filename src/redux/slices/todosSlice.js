import { nanoid } from 'nanoid';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = [{ id: 1, text: 'test' }];

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (text) => {
                return {
                    payload: {
                        id: nanoid(),
                        text,
                    },
                };
            },
        },
    },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
