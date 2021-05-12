import {addRoutine, getRoutines} from "../service/routineService";

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

export const fetchRoutinesEvent = createAsyncThunk(
    'routines/fetch',
    async () => {
        return await getRoutines();
    }
);

export const addRoutineEvent = createAsyncThunk(
    'routines/add',
    async (routine) => {
        const res = await addRoutine(routine);
        console.log(res);
        return res;
    }
);

const routineSlice = createSlice({
    name: 'routines',
    initialState: [],
    reducers: {

    },
    extraReducers: {
        [fetchRoutinesEvent.fulfilled]: (state, action) => {
            return (state = action.payload);
        },
        [addRoutineEvent.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.push(action.payload);
            return state;
        }
    },
});

export default routineSlice.reducer;
