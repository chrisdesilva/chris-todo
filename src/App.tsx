import React from "react";
import { Todos } from "./containers/Todos";
import "./App.css";

import { Provider } from "react-redux";
import { configureStore } from "./core/frameworks";

function App() {
  return (
    <Provider store={configureStore()}>
      <Todos />
    </Provider>
  );
}

export default App;
