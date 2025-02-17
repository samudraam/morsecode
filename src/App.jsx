import "./App.css";
import Specimen from "./Specimen";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ErrorHandler from "./ErrorHandler";

function App() {
  return (
    <Router>
      <div className="App">
        <ErrorHandler />
        <Routes>
          <Route path="/" element={<Specimen />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
