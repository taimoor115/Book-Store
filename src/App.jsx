import MyNavBar from "./Components/MyNavBar";
import Listing from "./pages/Listing";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/book/list" element={<Listing />}></Route>
      </Routes>
    </div>
  );
};

export default App;
