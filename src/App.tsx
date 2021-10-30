import React from "react";
import { Button } from "antd";
import { Display } from "./components/display";
import { Keypad } from "./components/keypad";

function App() {
  return (
    <div className="bg-white max-w-md">
      <Display text="1+1" />
      <Keypad />
    </div>
  );
}

export default App;
