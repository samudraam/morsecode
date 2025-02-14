import { useState } from "react";
import "./App.css";
import Specimen from "./Specimen";
import ToggleSwitch from "./ToggleSwitch";

function App() {
  const [isMorseAll, setIsMorseAll] = useState(false);

  const toggleAll = () => {
    setIsMorseAll((prev) => !prev);
  };

  return (
    <>
      <div className="App">
        <div className="header-container">
          <h1>telegraphy</h1>
          <ToggleSwitch isMorseAll={isMorseAll} toggleAll={toggleAll} />
        </div>
        <Specimen isMorseAll={isMorseAll} />
      </div>
    </>
  );
}

export default App;
