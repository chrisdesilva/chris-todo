import React from "react";
import { Todos } from "./containers/Todos";
import "./App.css";

import { Provider } from "react-redux";
import store from "./core/frameworks";

function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}

export default App;
