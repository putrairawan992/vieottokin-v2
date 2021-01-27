import { combineReducers } from "redux";
import modalControl from "./ModalControl";
import isLoading from "./Loading";
import auth from "./Auth";
import globalState from "./GlobalState";

export default combineReducers({
  modalControl, isLoading, auth, globalState
});
