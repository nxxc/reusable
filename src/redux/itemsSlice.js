import { nanoid } from 'nanoid';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (todo) => {
                console.log(todo);
                return {
                    payload: {
                        id: nanoid(),
                        text: todo,
                    },
                };
            },
        },
    },
});

export const { addItem } = itemSlice.actions;

export default itemSlice.reducer;
