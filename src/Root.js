import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import commentsReducer from "./reducers/comments";

const reducer = combineReducers({
  comments: commentsReducer,
});

const Root = (props) => {
  return <Provider store={createStore(reducer, props.initialState || {})}>{props.children}</Provider>;
};

export default Root;
 