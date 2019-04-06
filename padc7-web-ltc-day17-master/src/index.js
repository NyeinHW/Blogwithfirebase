import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import NewArticleForm from "./components/NewArticleForm";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";
import DeleteArticle from "./components/DeleteArticle";
import {createStore, applyMiddleware} from  "redux";
import {Provider} from "react-redux";
import rootReducer from './reducers';
import thunk from 'redux-thunk';


const rootElement = document.getElementById("root");
const store=createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  rootElement
);
