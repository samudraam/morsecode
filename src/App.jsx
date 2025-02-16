import "./App.css";
import Specimen from "./Specimen";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Specimen />} />
          </Routes>
        </Router>{" "}
      </div>
    </>
  );
}

export default App;
