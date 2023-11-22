import { Fragment } from "react";
import Header from "../components/Layout/Header/header";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import Footer from "../components/Layout/Footer/footer";

const BlogDetailsPage = () => {
  return (
    <Fragment>
      <Header />
      <BlogDetails />
      <Footer />
    </Fragment>
  );
};

export default BlogDetailsPage