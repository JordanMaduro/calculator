import React from "react";
import { Calculator } from "./components/calculator";

function App() {
  return (
    <div className="flex justify-center pt-8 h-screen bg-gray-100">
      <div className="w-64">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
