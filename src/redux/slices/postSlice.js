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
    initialState: {
        selected: null,
        posts: []
    },
    reducers: {
        selectPost(state, action) {
            state.selected = action.payload;
        },
    },
    extraReducers: {
        [getPostsEvent.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.selected = !!state.posts.length ? state.posts[0].id : null;
        },
        [addPostEvent.fulfilled]: (state, action) => {
            state.posts.push(action.payload);
        }
    },
});

export const { selectPost } = postSlice.actions;

export default postSlice.reducer;
