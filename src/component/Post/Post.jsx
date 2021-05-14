import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {Paper, List, ListItem, Checkbox} from '@material-ui/core';
import {getItems, toggleItem} from "../../redux/service/itemService";
import styles from './style.module.css';

function Post({post}) {
    const {id, title} = post;
    const [items, setItems] = useState([]);
    const dispatch = useDispatch();

    useEffect(async () => {
        const items = await getItems(id);
        setItems(items);
    }, [dispatch]);

    const onClick = (id) => {
        const newItems = items.map((item) =>
            item.id === id ? {...item, done: !item.done} : item
        );
        setItems(newItems);
        toggleItem(id);
    };

    return (
        <Paper className={styles.item}>
            <header className={styles.header}>
                <h1>{title}</h1>
            </header>

            <section className={styles.listContainer}>
                <List>
                    {items.map((item) => (
                        <ListItem key={item.id}>
                            <Checkbox checked={item.done} onClick={() => onClick(item.id)}/>
                            {item.name}
                        </ListItem>
                    ))}
                </List>
            </section>
        </Paper>
    );
}

export default Post;
