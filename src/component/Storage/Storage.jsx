import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { List, ListItem, Typography } from '@material-ui/core';
import {getStocksEvent} from "../../redux/slices/stockSlice";
import styles from './styles.module.css';

function Storage({ addItem }) {
    const { stocks } = useSelector((state) => state.stock);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStocksEvent());
    }, [dispatch]);

    return (
        <section className={styles.stocksContainer}>
            <header className={styles.header}>
                <Typography variant='h4'>Explore</Typography>
            </header>
            <List className={styles.list}>
                {stocks.map(it =>
                    <ListItem button key={it.id} onClick={() => addItem(it.name)}>
                        <span>{it.name} (fixed : {it.isFixed ? "T" : "F"})</span>
                    </ListItem>
                )}
            </List>
        </section>
    );
}

export default Storage;
