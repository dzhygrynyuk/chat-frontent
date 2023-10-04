import { configureStore } from "@reduxjs/toolkit";
import dialogs from './slices/dialogsSlice';
import messages from "./slices/messagesSlice";

export const store = configureStore({
    reducer: {
        dialogs,
        messages
    },
});