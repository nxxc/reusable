import { nanoid } from 'nanoid';
import FbRepository from '../firebase/firebaseRepository';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const db = new FbRepository();

const initialState = [];

export const rfetchRoutines = createAsyncThunk(
    'routines/fetch',
    async (userId, _) => {
        const res = await db.getRoutines(userId);
        const routines = Object.values(res.toJSON());
        return routines;
    }
);

export const raddRoutine = createAsyncThunk(
    'routines/add',
    async (data, { dispatch }) => {
        const res = await db.createRoutine(data.userId, data.newRoutine);
        dispatch(rfetchRoutines(data.userId));
    }
);
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
        [rfetchRoutines.fulfilled]: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { addRoutine } = routineSlice.actions;

export default routineSlice.reducer;
