import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dialogsApi } from "utils/api";

export const fetchDialogs = createAsyncThunk(
    'dialogs/fetchDialogs',
    async () => {
        const { data } = await dialogsApi.getAll();
        return data
    }
);

const initialState = {
    items: [],
    currentDialog: null,
};


const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setCurrentDialog: (state, action) => {
            state.currentDialog = action.payload;
        }
    },
    extraReducers: {
        [fetchDialogs.fulfilled]: (state, action) => {
            state.items = action.payload;
        }
    },
});

export const { setItems, setCurrentDialog } = dialogsSlice.actions;

export default dialogsSlice.reducer;