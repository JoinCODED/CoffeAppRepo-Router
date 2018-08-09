import React from "react";

// Component
import MyApp from "./Components/MyApp.js";

// Router
import { NativeRouter } from "react-router-native";

class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <MyApp />
      </NativeRouter>
    );
  }
}

export default App;
