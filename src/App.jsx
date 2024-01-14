import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/login" element={<h1>Login</h1>}></Route>
      </Routes>
    </div>
  );
};

export default App;
