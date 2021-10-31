import React from "react";
import { Calculator } from "./components/calculator";

function App() {
  return (
    <div className="flex bg-gray-100 h-screen justify-center pt-8">
      <div className="w-64">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
