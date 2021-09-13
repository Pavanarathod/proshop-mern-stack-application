import React from "react";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Route path="/" component={Homepage} exact />
        <Route path="/product/:_id" component={ProductPage} />
        <Route path="/cart/:_id?" component={CartPage} />
      </main>
    </BrowserRouter>
  );
}

export default App;
