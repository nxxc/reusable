import React from 'react';
import { Drawer } from '@material-ui/core';
import PostForm from '../PostForm/PostForm';
import {useDispatch, useSelector} from 'react-redux';
import Contents from '../Container/Contents/Contents';
import Header from '../Container/Header/Header';
import {closeDrawer} from "../../redux/store";

function App() {
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
            <Drawer
                anchor='right'
                open={isOpen}
                onClose={e => setDrawerClose(e)}
            >
                <PostForm />
            </Drawer>
        </>
    );
}

export default App;
