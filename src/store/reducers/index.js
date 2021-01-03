import { combineReducers } from "redux";
import modalControl from "./ModalControl";
import isLoading from "./Loading"

export default combineReducers({
  modalControl, isLoading
});
