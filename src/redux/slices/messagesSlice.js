import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { messagesApi } from "utils/api";

export const fetchMessages = createAsyncThunk(
    'messages/fetchMessages',
    async ( dialodId ) => {
        const { data } = await messagesApi.getAllByDialogId(dialodId);
        return data
    }
);

const initialState = {
    items: [],
};

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const { setItems } = messagesSlice.actions;

export default messagesSlice.reducer;