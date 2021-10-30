import React from "react";
import { Button } from "antd";
import { Display } from "./components/display";

function App() {
  return (
    <div className="bg-white">
      <Display />
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
