import "./App.css";
import Settlement from "./components/Settlement";
import Tracker from "./components/Tracker";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Animation from "./components/Animation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="ml-auto" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/settle" element={<Settlement />} />
          <Route path="/track" element={<Tracker />} />
        </Routes>
        <div></div>
      </Router>
    </div>
  );
}

export default App;
