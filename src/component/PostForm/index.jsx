import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostEvent } from '../../redux/slices/postSlice';
import { addStockEvent } from '../../redux/slices/stockSlice';
import { closeDrawer } from '../../redux/store';
import { createItem } from "../../factory/ItemFactory";
import { createPost } from "../../factory/PostFactory";
import { createStock } from "../../factory/StockFactory";
import StorageContainer from "../StorageContainer";
import styles from './styles.module.css';

export default function () {
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
        if (value === '') return;
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
                <input
                    id='title'
                    type='text'
                    placeholder='add title...'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />

                <ul>
                    {currentItem.map((item, index) => <li key={index}>{item.name}</li>)}
                </ul>

                <input
                    id='item'
                    type='text'
                    value={value}
                    placeholder='add item...'
                    onChange={handleChange}
                />

                <div>
                    <button onClick={onSaveItem}>add item</button>
                    <button onClick={onSavePost}>save</button>
                </div>
            </form>

            <StorageContainer addItemToPost={addItem} />
        </div>
    );
}
