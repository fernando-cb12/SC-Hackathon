import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HeaderContent from "./components/headerContent";
import Home from "./components/Home";
import Help from "./components/Help";
import Map from "./components/Map";
import Dashboard from "./components/Dashboard";

function App() {
  // Function to render a page with the correct layout and title
  const renderPage = (title: string, Component: React.ComponentType) => (
    <div className="w-full flex flex-col bg-gray-100">
      <HeaderContent title={title} />
      <div className="flex flex-col">
        <Component />
      </div>
    </div>
  );

  return (
    <Router>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <Navbar />
          <Routes>
            <Route path="/" element={renderPage("Home", Home)} />
            <Route
              path="/dashboard"
              element={renderPage("Dashboard", Dashboard)}
            />
            <Route path="/map" element={renderPage("Map", Map)} />
            <Route path="/help" element={renderPage("Help & Support", Help)} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
