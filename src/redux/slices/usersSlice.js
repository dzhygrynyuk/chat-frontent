import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { usersApi } from "utils/api";
import { openNotification } from 'utils/helpers';

export const fetchUserLogin = createAsyncThunk(
    'messages/fetchUserLogin',
    async ( postData ) => {
        const { data } = await usersApi.login(postData);
        return data
    }
);

const initialState = {
    data: null,
    isAuth: false,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUserLogin.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isAuth = true;
            openNotification({
                title: "Successful",
                text: "Authorization is successful!", 
                type: 'success'
            });
        },
        [fetchUserLogin.rejected]: (state, action) => {
            openNotification({
                title: "Authorization error",
                text: "User not found!", 
                type: 'error'
            });
        }
    },
});

export default usersSlice.reducer;