import { nanoid } from 'nanoid';
import repository from '../repository/repoAware';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = [];

// export const fetchItems = createAsyncThunk('fetchItems', async () => {
//     const res = await repository.getItems(1);
//     console.log(res);
//     return res;
// });

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
    // extraReducers: {
    //     [fetchItems.fulfilled]: (state, action) => {
    //         state.push(action.payload);
    //     },
    // },
});

export const { addItem } = itemSlice.actions;

export default itemSlice.reducer;
