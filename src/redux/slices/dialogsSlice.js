import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dialogsApi } from "utils/api";

export const fetchDialogs = createAsyncThunk(
    'dialogs/fetchDialogs',
    async () => {
        const { data } = await dialogsApi.getAll();
        console.log('fetchDialogs');
        console.log(data);
        return data
    }
)

const initialState = {
    items: [],
};


const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [fetchDialogs.fulfilled]: (state, action) => {
            state.items = action.payload;
        }
    },
});

export const { setItems } = dialogsSlice.actions;

export default dialogsSlice.reducer;