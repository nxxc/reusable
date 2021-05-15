import React from 'react';
import Stock from "../Stock";

export default function ({ stocks, addItemToPost }) {
    return (
        <div>
            {stocks.map(it => <Stock key={it.id} stock={it} addItemToPost={addItemToPost} />)}
        </div>
    );
}
