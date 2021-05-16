import React from "react";
import {useDispatch} from "react-redux";
import {selectPost} from "../../redux/slices/postSlice";

export default function () {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(selectPost(0));
    };

    return (
        <div>
            <button onClick={onClick}>NEW POST</button>
        </div>
    )
}