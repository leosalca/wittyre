import { configureStore } from "@reduxjs/toolkit";
import userACRContainerReducer from "../components/userACRContainer/UserACRContainerSlice";
import autoCompleteListReducer from "../components/top_navbar_container/AutoCompleteListSlice";

// the reducer name "userACRList" is what can be accessed by the useSelector hook
export default configureStore({
    reducer: {
        userACRList: userACRContainerReducer,
        autoCompleteList: autoCompleteListReducer
    }
});

