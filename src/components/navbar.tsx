import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  MapIcon,
  QuestionMarkCircleIcon,
  Square2StackIcon,
} from "@heroicons/react/16/solid";

// This component is a sidebar to navigate through the app
export default function Navbar() {
  const location = useLocation();

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path ? "bg-gray-700" : "";
  };

  return (
    <div className="flex flex-col h-screen w-1/16 bg-orange-400 text-white p-4">
      <nav className="flex flex-col space-y-2 items-center justify-center">
        <Link
          to="/"
          className={`hover:bg-gray-700 p-2 rounded ${isActive("/")}`}
        >
          <HomeIcon className="h-7 w-7 inline-block mr-2" />
        </Link>
        <Link
          to="/dashboard"
          className={`hover:bg-gray-700 p-2 rounded ${isActive("/dashboard")}`}
        >
          <Square2StackIcon className="h-7 w-7 inline-block mr-2" />
        </Link>
        <Link
          to="/map"
          className={`hover:bg-gray-700 p-2 rounded ${isActive("/map")}`}
        >
          <MapIcon className="h-7 w-7 inline-block mr-2" />
        </Link>
        <Link
          to="/help"
          className={`hover:bg-gray-700 p-2 rounded ${isActive("/help")}`}
        >
          <QuestionMarkCircleIcon className="h-7 w-7 inline-block mr-2" />
        </Link>
      </nav>
    </div>
  );
}
