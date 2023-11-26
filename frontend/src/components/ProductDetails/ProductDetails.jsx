import Breadcrumb from "./Breadcrumb/Breadcrumb";
import "./ProductDetails.css";
import Tabs from "./Tabs/Tabs";
import Info from "./Info/Info";
import Gallery from "./Gallery/Gallery";
import "../../../src/data.json"
const ProductDetails = () => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <Breadcrumb />
          <div className="single-content">
            <main className="site-main">
            <Gallery />
            <Info />
            </main>
          </div>
          <Tabs />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;