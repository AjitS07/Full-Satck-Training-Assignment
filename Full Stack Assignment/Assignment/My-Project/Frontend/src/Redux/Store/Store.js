import { configureStore } from "@reduxjs/toolkit";
 import authReducer from '../Slices/authSlices';

// Create a Redux store instance
const store = configureStore({
    reducer : {
        auth : authReducer
    }
});
export default store;