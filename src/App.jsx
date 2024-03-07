import React from "react";
import Footer from "./ServicesPage/Footer/Footer";
import "./App.css";
import NavBar from "./ServicesPage/Navbar/NavBar";
import SideNav from "./ServicesPage/SideNav/SideNav";
import Services from "./ServicesPage/Services/Services";
import Categories from "./ServicesPage/Categories/Categories";
import Subscribe from "./ServicesPage/Subscribe/Subscribe";
import Trendy from "./ServicesPage/Trendy/Trendy";

const App = () => {
  return (
    <div>
      <NavBar />
      <SideNav />
      <Services />
      <Categories />
      <Subscribe />
      <Trendy />
      <Footer />
    </div>
  );
};

export default App;
