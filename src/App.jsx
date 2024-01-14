import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
};

export default App;
