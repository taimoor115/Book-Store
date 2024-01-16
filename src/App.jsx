import { Route, Routes } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import Listing from "./pages/Listing";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";
import Order from "./pages/Order";
import ViewOrder from "./pages/ViewOrder";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/book/list" element={<Listing />}></Route>
        <Route path="/book/view/:bookId" element={<Details />}></Route>
        <Route path="/book/orders" element={<Order />}></Route>
        <Route path="/books/orders/:bookId" element={<ViewOrder />}></Route>
      </Routes>
    </div>
  );
};

export default App;
