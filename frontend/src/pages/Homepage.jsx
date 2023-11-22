import React from "react";
import Header from "../components/Layout/Header/header";
import Sliders from "../components/Slider/slider"; 
import Categories from "../components/Categories/categories";    
import Products from "../components/Products/products";  
import Campaigns from "../components/Campaigns/campaigns";   
import Blogs from "../components/Blogs/blogs";
import Brands from "../components/Brands/brands";
import CampaignSingle from "../components/CampaignSimple/campaignSimple";
import Policy from "../components/Layout/Policy/policy";
import Footer from "../components/Layout/Footer/footer";
const HomePage =() => {

    return (
<React.Fragment>

<Header />
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Policy />
      <Footer />
</React.Fragment>
    );
};


export default HomePage;