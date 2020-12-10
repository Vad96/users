import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore. applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './redux/reducers/index';
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
