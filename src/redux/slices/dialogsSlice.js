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
    currentDialogId: null,
};


const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        setCurrentDialog: (state, action) => {
            state.currentDialogId = action.payload;
        }
    },
    extraReducers: {
        [fetchDialogs.fulfilled]: (state, action) => {
            state.items = action.payload;
        }
    },
});

export const { setCurrentDialog } = dialogsSlice.actions;

export default dialogsSlice.reducer;