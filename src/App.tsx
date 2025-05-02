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
    <div className="w-full min-h-screen flex flex-col bg-gray-100">
      <HeaderContent title={title} />
      <div className="flex-1">
        <Component />
      </div>
    </div>
  );

  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1 pl-24">
          {" "}
          {/* Add margin-left instead of padding and use flex-1 to take full width */}
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
