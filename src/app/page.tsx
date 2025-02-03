import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import Progressor from "./components/Progressor";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Card from "./components/Card";

import Reservation from "./components/Reservation";
import Home from "./components/Menuitem";

export default function App() {
  return (
   <div className="bg-gradient-to-r from-black to bg-gray-600 text-white min-h-screen">
    <Navbar/>
    <Carousel/>
    <Progressor/>
    <Banner/>
    <ProductList/>
    <Home/>
    <Offer/>
    <Card/>
    <Reservation/>
  
    <Footer/>

   </div>
  );
}
