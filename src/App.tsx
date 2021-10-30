import React from "react";
import { Button } from "antd";
import { Display } from "./components/display";

function App() {
  return (
    <div className="bg-white">
      <Display text="1+1" />
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
