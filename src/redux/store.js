import { configureStore } from "@reduxjs/toolkit";
import dialogs from './slices/dialogsSlice';

export const store = configureStore({
    reducer: (
        dialogs
    ),
});