import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slice/Dataslice"
const store = configureStore({
    reducer:{
        userInfo : UserReducer
    }
})


export default store