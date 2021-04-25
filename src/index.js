import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import tasks from "./reducers";

import { Provider } from "react-redux";

const store = createStore(tasks);

ReactDOM.render(
  <React.StrictMode>
    {/* 使用 connect 将数据从 store 传递到 react 组件 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
