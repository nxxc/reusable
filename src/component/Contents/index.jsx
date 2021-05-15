import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {openDrawer} from "../../redux/store";
import {getPostsEvent} from "../../redux/slices/postSlice";
import Post from '../Post';

export default function () {
    const posts = useSelector(state => state.post);
    const dispatch = useDispatch();

    const setDrawerOpen = () => dispatch(openDrawer());

    useEffect(() => {
        dispatch(getPostsEvent());
    }, [dispatch]);

    return (
        <section>
            <button onClick={setDrawerOpen}>ADD POST</button>

            {posts.map(
                post => <Post key={post.id} post={post}/>
            )}
        </section>
    );
}
