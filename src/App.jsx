import "./App.css";
import Specimen from "./Specimen";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Specimen />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>{" "}
      </div>
    </>
  );
}

export default App;
