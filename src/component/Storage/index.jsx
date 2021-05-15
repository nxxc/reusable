import React from 'react';
import styles from './styles.module.css';
import Stock from "../Stock";

export default function ({ stocks, addItemToPost }) {
    return (
        <div className={styles.list}>
            {stocks.map(it => <Stock key={it.id} stock={it} addItemToPost={addItemToPost} />)}
        </div>
    );
}
