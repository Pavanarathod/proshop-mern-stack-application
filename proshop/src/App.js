import React from "react";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Route path="/" component={Homepage} exact />
        <Route path="/product/:id" component={ProductPage} />
      </main>
    </BrowserRouter>
  );
}

export default App;
