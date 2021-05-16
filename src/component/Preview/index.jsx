import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectPost} from "../../redux/slices/postSlice";

export default function ({ post }) {
    const { selected } = useSelector(state => state.post);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(selectPost(post.id));
    };

    return (
        <div onClick={onClick} style={selected === post.id ? { backgroundColor: "#2196f3" } : {}}>
            <header>
                <h1>{post.title}</h1>
            </header>
        </div>
    );
}
