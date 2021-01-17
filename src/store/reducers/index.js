import { combineReducers } from "redux";
import modalControl from "./ModalControl";
import isLoading from "./Loading"
import auth from "./Auth"

export default combineReducers({
  modalControl, isLoading, auth
});
