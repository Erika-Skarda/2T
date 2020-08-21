import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { actions } from "./actions";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    actions
  });