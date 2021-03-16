import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import { reducers } from "./reducers";
import reduxThunk from "redux-thunk";
import "./i18n";
import { BreakpointsProvider } from "./components/Breakpoint";

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <React.Suspense fallback="loading">
    <Provider store={store}>
      <BreakpointsProvider>
        <App />
      </BreakpointsProvider>
    </Provider>
  </React.Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
