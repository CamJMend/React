import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/navbar";
import Home from "./pages/mainPages/Home";
import About from "./pages/mainPages/about";
import Dashboard from "./pages/mainPages/Dashboard";
import Default from "./pages/mainPages/Default";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Default />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;