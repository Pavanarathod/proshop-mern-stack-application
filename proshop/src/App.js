import React from "react";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Route path="/shipping" component={ShippingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/product/:_id" component={ProductPage} />
        <Route path="/cart/:_id?" component={CartPage} />
        <Route path="/" component={Homepage} exact />
      </main>
    </BrowserRouter>
  );
}

export default App;
