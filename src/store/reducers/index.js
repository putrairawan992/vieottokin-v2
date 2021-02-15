import { combineReducers } from "redux";
import modalControl from "./ModalControl";
import isLoading from "./Loading";
import auth from "./Auth";
import globalState from "./GlobalState";
import serviceFilter from "./ServiceFilter";
import wistlist from "./Wishlist";

export default combineReducers({
  modalControl,
  isLoading,
  auth,
  globalState,
  serviceFilter,
  wistlist
});
