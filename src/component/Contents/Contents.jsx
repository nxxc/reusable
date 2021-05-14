import { Button } from '@material-ui/core';
import React, {useEffect} from 'react';
import Post from '../Post/Post';
import styles from './styles.module.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {openDrawer} from "../../redux/store";
import {getPostsEvent} from "../../redux/slices/postSlice";
import {useDispatch, useSelector} from "react-redux";

function Contents() {
    const posts = useSelector(state => state.post);
    const dispatch = useDispatch();

    const setDrawerOpen = () => dispatch(openDrawer());

    useEffect(() => {
        dispatch(getPostsEvent());
    }, [dispatch]);

    return (
        <section className={styles.container}>
            {posts.map(
                post => <Post key={post.id} post={post} />
            )}

            <Button onClick={setDrawerOpen} className={styles.addButton}>
                <AddCircleOutlineIcon />
            </Button>
        </section>
    );
}

export default Contents;
