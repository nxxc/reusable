import { createAsyncThunk } from '@reduxjs/toolkit';
import repository from '../repository/repoAware';

export const fetchRoutines = createAsyncThunk('fetchRoutines', async () => {
    const res = await repository.getAllRoutines();
    return res;
});
