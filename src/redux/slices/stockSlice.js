import { nanoid } from 'nanoid';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = [{ id: 1, text: 'test' }];

const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {
        addStock: {
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

export const { addStock } = stockSlice.actions;

export default stockSlice.reducer;
