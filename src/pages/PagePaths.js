import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Contact from "pages/Contact";
import AboutUs from "pages/AboutUs";
import ItemListContainer from "pages/ItemListContainer";
import ItemDetailContainer from "pages/ItemDetailContainer";
import Payment from "pages/Payment";

function PagePaths() {
  return (
    <>
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<ItemListContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route
              path="/store/product/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default PagePaths;
