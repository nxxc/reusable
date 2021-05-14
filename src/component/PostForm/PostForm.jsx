import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Input, List, ListItem } from '@material-ui/core';
import { addPostEvent } from '../../redux/slices/postSlice';
import { closeDrawer } from '../../redux/store';
import { createItem } from "../../factory/ItemFactory";
import { createPost } from "../../factory/PostFactory";
import { createStock } from "../../factory/StockFactory";
import { addStockEvent } from '../../redux/slices/stockSlice';
import Storage from "../Storage/Storage";
import styles from './styles.module.css';

function PostForm() {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [currentItem, setCurrentItem] = useState([]);

    const { stocks } = useSelector((state) => state.stock);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const addItem = name => {
        const newItem = createItem(name);
        setCurrentItem(state => [...state, newItem]);
    }

    // TODO : 별도의 파일로 리팩터링
    const addStockToStorageIfNotExist = name => {
        const isNotExistInNonFixedStocks = stocks.filter(it => !it.isFixed && it.name === name).length === 0;

        if (isNotExistInNonFixedStocks) {
            const newStock = createStock(name);
            const action = addStockEvent(newStock);
            dispatch(action);
        }
    }

    const onSaveItem = (e) => {
        e.preventDefault();
        setValue('');
        addStockToStorageIfNotExist(value);
        addItem(value);
    };

    const onSavePost = () => {
        const newPost = createPost(title, currentItem);

        dispatch(addPostEvent(newPost));

        setCurrentItem([]);
        setTitle('');
        dispatch(closeDrawer());
    };

    return (
        <div className={styles.container}>
            <form className={styles.postContainer} onSubmit={onSaveItem}>
                <Input
                    id='title'
                    type='text'
                    placeholder='add title...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <List>
                    {currentItem.map((item, index) => (
                        <ListItem key={index}>{item.name}</ListItem>
                    ))}
                </List>
                <Input
                    id='item'
                    type='text'
                    value={value}
                    placeholder='add item...'
                    onChange={handleChange}
                />
                <ButtonGroup>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={onSaveItem}
                        type='submit'
                    >
                        add item
                    </Button>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={onSavePost}
                    >
                        save
                    </Button>
                </ButtonGroup>
            </form>

            <Storage addItem={addItem} />
        </div>
    );
}

export default PostForm;
