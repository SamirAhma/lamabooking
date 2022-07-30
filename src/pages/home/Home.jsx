import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredPropeties/FeaturedProperties";
import MailList from "../../components/mailList/MailList.jsx";
import Footer from "../../components/footer/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="homeContainer">
        <Featured></Featured>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList></PropertyList>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties></FeaturedProperties>
        <MailList></MailList>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
