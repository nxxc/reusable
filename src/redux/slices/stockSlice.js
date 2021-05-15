import {addStock, getStocks} from "../service/stockService";
import {createAsyncThunk} from "@reduxjs/toolkit";

const { createSlice } = require('@reduxjs/toolkit');

export const getStocksEvent = createAsyncThunk(
    'stock/fetch',
    async () => {
        return await getStocks();
    }
);

export const addStockEvent = createAsyncThunk(
    'stock/add',
    async (stock) => {
        return await addStock(stock);
    }
);

const stockSlice = createSlice({
    name: 'stock',
    initialState: {
        parent: 0,
        stocks: []
    },
    reducers: {
        setParent(state, action) {
            state.parent = action.payload;
        },
    },
    extraReducers: {
        [getStocksEvent.fulfilled]: (state, action) => {
            state.stocks = action.payload;
        },
        [addStockEvent.fulfilled]: (state, action) => {
            state.stocks.push(action.payload);
        }
    },
});

export const { setParent } = stockSlice.actions;

export default stockSlice.reducer;
