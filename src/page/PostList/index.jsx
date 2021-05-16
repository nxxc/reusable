import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {closeDrawer} from "../../redux/store";
import Header from "../../component/Header";
import Contents from "../../component/Contents";
import {Drawer} from "@material-ui/core";
import PostForm from "../../component/NewPost";

export default function PostList() {
    const isOpen = useSelector((state) => state.base.isOpen);
    const dispatch = useDispatch();

    const setDrawerClose = (event) => {
        const isKeyDown = event.type === 'keydown'
        const isTabOrShift = event.key === 'Tab' || event.key === 'Shift'

        if (isKeyDown && isTabOrShift) return;

        dispatch(closeDrawer());
    };

    return (
        <>
            <Header />
            <Contents />
            <Drawer anchor='right' open={isOpen} onClose={setDrawerClose}>
                <PostForm />
            </Drawer>
        </>
    );
}