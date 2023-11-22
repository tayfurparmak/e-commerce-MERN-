import React from "react";

import Sliders from "../components/Slider/Sliders"; 
import Categories from "../components/Categories/categories";    
import Products from "../components/Products/products";  
import Campaigns from "../components/Campaigns/campaigns";   
import Blogs from "../components/Blogs/blogs";
import Brands from "../components/Brands/brands";
import CampaignSingle from "../components/CampaignSimple/campaignSimple";
import Policy from "../components/Layout/Policy/policy";

const HomePage =() => {

    return (
<React.Fragment>


      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Policy />
     
</React.Fragment>
    );
};


export default HomePage;