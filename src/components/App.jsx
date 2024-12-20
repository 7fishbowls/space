// import Header from "./Header";
import "../styles/main.css";
import Home from "./Home";
import About from "./About";
import Create from "./Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signup" element={<Create />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
