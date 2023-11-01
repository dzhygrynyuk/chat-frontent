import { configureStore } from "@reduxjs/toolkit";
import dialogs from './slices/dialogsSlice';
import messages from "./slices/messagesSlice";
import users from "./slices/usersSlice";

export const store = configureStore({
    reducer: {
        dialogs,
        messages,
        users
    },
});