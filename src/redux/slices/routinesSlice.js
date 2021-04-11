import { nanoid } from 'nanoid';
import { fetchRoutines } from '../service/routineService';

// const isDev = process.env === 'Development';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const routineSlice = createSlice({
    name: 'routine',
    initialState,
    reducers: {
        addRoutine: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (data) => {
                return {
                    payload: {
                        id: nanoid(),
                        title: data.title,
                        todos: data.current.map((todo) => {
                            return {
                                ...todo,
                                done: false,
                            };
                        }),
                    },
                };
            },
        },
    },
    extraReducers: {
        [fetchRoutines.fulfilled]: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { addRoutine } = routineSlice.actions;

export default routineSlice.reducer;
