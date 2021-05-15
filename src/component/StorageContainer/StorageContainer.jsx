import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getStocksEvent, setParent} from "../../redux/slices/stockSlice";
import Storage from "../Storage/Storage";

export default function({ addItemToPost }) {
    const { stocks, parent } = useSelector((state) => state.stock);
    const fixedStocks = stocks.filter(it => it.isFixed && it.parent === parent);
    const nonFixedStocks = stocks.filter(it => !it.isFixed);

    const dispatch = useDispatch();

    const setStorageParent = () => { dispatch(setParent(0)); }

    useEffect(() => {
        dispatch(getStocksEvent());
    }, [dispatch]);

    return (
        <div>
            <header>Browse</header>

            <hr />

            <button onClick={setStorageParent}>root</button>

            <hr />

            <section>
                {/*  fixed stocks' storage  */}
                <Storage stocks={fixedStocks} addItemToPost={addItemToPost} />

                <hr />

                {/*unfixed stocks' storage*/}
                <Storage stocks={nonFixedStocks} addItemToPost={addItemToPost} />

            </section>
        </div>
    )
}
