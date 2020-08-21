import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { generateReducers } from "../Reducers"
import CssBaseline from '@material-ui/core/CssBaseline';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import  Router  from "../Containers/Router";
import { GlobalStyle, theme } from "../Styles/global"

//Estilização
import { ThemeProvider } from "styled-components";
import React from "react";

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f
];

export const store = createStore(generateReducers(history), 
compose(...middlewares));

const App = () => (

      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          < CssBaseline />
          <Router history={history} />
        </ThemeProvider>
      </Provider>
);


export default App;