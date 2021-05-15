import React from 'react';
import {useDispatch} from "react-redux";
import {setParent} from "../../redux/slices/stockSlice";

export default function ({ stock, addItemToPost }) {
    const dispatch = useDispatch();

    const setStorageParent = () => {
        if (stock.isFixed) dispatch(setParent(stock.id));
    }
    const onAddToPost = () => { addItemToPost(stock.name); }

    return (
        <div>
            <span onClick={setStorageParent}>{stock.name}</span>
            <button onClick={onAddToPost}> + </button>
        </div>
    );
}
