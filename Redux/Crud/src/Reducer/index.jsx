import { combineReducers } from "redux";
import Reducer from "../Reducer/Reducer";

const rootReducer = combineReducers({
  reducer: Reducer,
});

export default rootReducer;
