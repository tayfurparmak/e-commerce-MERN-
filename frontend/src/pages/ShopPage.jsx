import { Fragment } from "react";



import Categories from "../components/Categories/categories"
import Products from "../components/Products/products"
import CampaignSingle from "../components/CampaignSimple/campaignSimple"
import Policy from "../components/Layout/Policy/policy"



const ShopPage = () => {

    return (

    <Fragment>
    
         <Categories />
        <Products />
        <CampaignSingle />
        <Products />
        <Policy />
       
       
    </Fragment>
    );


    


    };


    export default ShopPage;