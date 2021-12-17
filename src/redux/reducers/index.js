import { combineReducers } from "redux";
import { setAllUsersReducer, setPageReducer, setLoadingReducer, setSelectedUserReducer,  setUserFriendsReducer, setFriendsPageReducer, setFriendsLoadingReducer} from "./reducers";

const reducers = combineReducers({setAllUsersReducer, setPageReducer, setLoadingReducer, setSelectedUserReducer, setUserFriendsReducer, setFriendsPageReducer, setFriendsLoadingReducer});

export default reducers;