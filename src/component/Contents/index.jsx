import React from 'react';
import {useSelector} from "react-redux";
import Post from '../Post';

export default function () {
    const posts = useSelector(state => state.post);

    return (
        <section>
            {posts.map(
                post => <Post key={post.id} post={post}/>
            )}
        </section>
    );
}
