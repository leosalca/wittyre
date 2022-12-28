import { configureStore } from "@reduxjs/toolkit";
import userACRContainerReducer from "../components/userACRContainer/UserACRContainerSlice";

// the reducer name "userACRList" is what can be accessed by the useSelector hook
export default configureStore({
    reducer: {
        userACRList: userACRContainerReducer
    }
});

