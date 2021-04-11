import { nanoid } from 'nanoid';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = [
    {
        id: 1,
        title: 'first',
        todos: [
            { id: 1, text: 'one', done: false },
            { id: 2, text: 'two', done: false },
            { id: 3, text: 'three', done: false },
        ],
    },
];

const routineSlice = createSlice({
    name: 'routine',
    initialState,
    reducers: {
        addRoutine: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (data) => {
                console.log(data);
                return {
                    payload: {
                        id: nanoid(),
                        title: 'hello',
                        todos: data,
                    },
                };
            },
        },
    },
});

export const { addRoutine } = routineSlice.actions;

export default routineSlice.reducer;
