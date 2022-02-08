import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Post from "./pages/post/Post";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <Post /> */}
      <Login />
    </div>
  );
}

export default App;
