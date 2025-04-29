import "./App.css";
import Navbar from "./components/navbar";
import Post from "./components/post";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-row">
          <Navbar />
          <div className="flex-grow p-4">
            <Post />
          </div>
        </div>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© IGOR</p>
        </footer>
      </div>
    </>
  );
}

export default App;
