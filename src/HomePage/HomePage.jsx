import React from "react";
import SearchStart from "./SearchStart/SearchStart";
import Categories from "./Categories/CategoriesHome";
import Footer from "../ServicesPage/Footer/Footer";
import Header from "./Header/Header";
import "./HomePage.css";
import HomeNavBar from "./HomeNavBar/HomeNavBar";
import HomeAbout from "./HomeAbout/HomeAbout";
// import Categories from '../ServicesPage/Categories/Categories'

const HomePage = () => {
  return (
    <div>
      <HomeNavBar />
      <Header />
      <SearchStart />
      <Categories />
      <HomeAbout/>
      <Footer />
    </div>
  );
};

export default HomePage;
