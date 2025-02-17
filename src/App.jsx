import "./App.css";
import { useEffect } from "react";
import Specimen from "./Specimen";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  useEffect(() => {
    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    }
  }, []);

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
