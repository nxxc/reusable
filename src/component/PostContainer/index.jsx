import React from "react";
import {useSelector} from "react-redux";
import PostForm from "../PostForm";
import Post from "../Post";

export default function () {
    const { selected, posts } = useSelector(state => state.post);

    if (selected === 0) {
        return <PostForm />;
    } else if (selected) {
        const post = posts.find(it => it.id === selected);
        return <Post post={post} />;
    } else {
        return <div>Something action trigger here.</div>
    }
}
