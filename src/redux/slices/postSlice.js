import {addPost, getPosts} from "../service/postService";

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

export const getPostsEvent = createAsyncThunk(
    'post/fetch',
    async () => {
        return await getPosts();
    }
);

export const addPostEvent = createAsyncThunk(
    'post/add',
    async (post) => {
        return await addPost(post);
    }
);

const postSlice = createSlice({
    name: 'post',
    initialState: [],
    reducers: {

    },
    extraReducers: {
        [getPostsEvent.fulfilled]: (state, action) => {
            return (state = action.payload);
        },
        [addPostEvent.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.push(action.payload);
            return state;
        }
    },
});

export default postSlice.reducer;