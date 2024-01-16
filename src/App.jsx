import { Route, Routes } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import Listing from "./pages/Listing";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";
import Order from "./pages/Order";
// Components
import MyNavBar from "./Components/MyNavBar";
const App = () => {
  return (
    <div>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/book/list" element={<Listing />}></Route>
        <Route path="/book/view/:bookId" element={<Details />}></Route>
        <Route path="/book/orders" element={<Order />}></Route>
      </Routes>
    </div>
  );
};

export default App;
