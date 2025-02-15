import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider
import theme from "./theme"; // Import the custom theme

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Checkout from "./components/CheckoutCart.jsx";
import Navbar from "./components/Navbar.jsx";
import UserAccount from "./components/UserAccount.jsx";
import AdminAccount from "./components/AdminAccount.jsx";
import UserHome from "./components/UserHome.jsx";
import UserOrderHistory from "./components/UserOrderHistory.jsx";
import Wishlist from "./components/Wishlist.jsx";
import AllOrders from "./components/AllOrders.jsx";
import AllUsers from "./components/AllUsers.jsx";
import ProductManagement from "./components/ProductManagement.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      {/* Wrap app in ThemeProvider */}
      <BrowserRouter>
        <div id="container">
          <div id="navbar">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<UserAccount />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<AdminAccount />} />
            <Route path="/userhome" element={<UserHome />} />
            <Route path="/orderhistory" element={<UserOrderHistory />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/allorders" element={<AllOrders />} />
            <Route path="/allusers" element={<AllUsers />} />
            <Route path="/product-management" element={<ProductManagement />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
