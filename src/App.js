import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Purchases from "./Pages/Home/Purchases/Purchases";
import MyLogin from "./Pages/Login/MyLogin";
import MySignUp from "./Pages/Login/MySignUp";
import NavBar from "./Pages/Shared/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<MyLogin />} />
        <Route path="/signup" element={<MySignUp />} />
        <Route path="/purchase/:id" element={<Purchases />} />
      </Routes>
    </div>
  );
}

export default App;
