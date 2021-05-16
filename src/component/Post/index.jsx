import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getItems, toggleItem} from "../../redux/service/itemService";

export default function ({post}) {
    const {id, title} = post;
    const [items, setItems] = useState([]);
    const dispatch = useDispatch();

    useEffect(async () => {
        const items = await getItems(id);
        setItems(items);
    }, [dispatch, post.id]);

    const onChange = (id) => {
        const newItems = items.map((item) =>
            item.id === id ? {...item, done: !item.done} : item
        );
        setItems(newItems);
        toggleItem(id);
    };

    return (
        <div>
            <header>
                <h1>{title}</h1>
            </header>

            <section>
                {items.map((item) => (
                    <div key={item.id}>
                        <input type="checkbox" checked={item.done} onChange={() => onChange(item.id)}/>
                        {item.name}
                    </div>
                ))}
            </section>
        </div>
    );
}
