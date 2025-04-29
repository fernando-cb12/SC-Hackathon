import {
  HomeIcon,
  MapIcon,
  QuestionMarkCircleIcon,
  Square2StackIcon,
} from "@heroicons/react/16/solid";

//this component is a sidebar to navigate through the app
export default function Navbar() {
  return (
    <div className="flex flex-col h-screen w-1/32 bg-orange-400 text-white p-4">
      <nav className="flex flex-col space-y-2 items-center justify-center">
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          <HomeIcon className="h-5 w-5 inline-block mr-2" />
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          <Square2StackIcon className="h-5 w-5 inline-block mr-2" />
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          <MapIcon className="h-5 w-5 inline-block mr-2" />
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          <QuestionMarkCircleIcon className="h-5 w-5 inline-block mr-2" />
        </a>
      </nav>
    </div>
  );
}
