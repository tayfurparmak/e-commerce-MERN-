import { Fragment } from "react";


import Headers from "../components/Layout/Header/header"
import Categories from "../components/Categories/categories"
import Products from "../components/Products/products"
import CampaignSingle from "../components/CampaignSimple/campaignSimple"
import Policy from "../components/Layout/Policy/policy"
import Footer from "../components/Layout/Footer/footer"


const ShopPage = () => {

    return (

    <Fragment>
         <Headers/> 
         <Categories />
        <Products />
        <CampaignSingle />
        <Products />
        <Policy />
        <Footer />
       
    </Fragment>
    );


    


    };


    export default ShopPage;