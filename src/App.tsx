import "./App.css";
import Navbar from "./components/navbar";
import Post from "./components/post";
import HeaderContent from "./components/headerContent";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-row">
          <Navbar />
          <div className="w-full">
            <HeaderContent title="Test" />
            <div className="flex flex-col space-y-4 w-1/2 pl-40">
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
