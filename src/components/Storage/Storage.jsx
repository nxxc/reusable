import React from 'react';
import styles from './styles.module.css';
import { List, ListItem, Typography } from '@material-ui/core';
import {useSelector} from "react-redux";

function Storage({ addItem }) {
    const stocks = useSelector((state) => state.stock);

    return (
        <section className={styles.stocksContainer}>
            <header className={styles.header}>
                <Typography variant='h4'>Explore</Typography>
            </header>
            <List className={styles.list}>
                {stocks.map(it =>
                    <ListItem button key={it.id} onClick={() => addItem(it.text)}>
                        {it.text}
                    </ListItem>
                )}
            </List>
        </section>
    );
}

export default Storage;
