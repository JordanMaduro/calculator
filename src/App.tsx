import React from "react";
import { Calculator } from "./components/calculator";

function App() {
  return (
    <div className="flex justify-center w-screen h-screen bg-gray-200">
      <div className="lg:py-20 w-screen lg:w-96 h-screen">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
