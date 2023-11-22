import React from "react";
import Header from "../components/Layout/Header/header";
import Blogs from "../components/Blogs/blogs";
import Footer from "../components/Layout/Footer/footer";

const BlogPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="blog-page">
        <Blogs />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default BlogPage;