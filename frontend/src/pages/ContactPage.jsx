import React from "react"
import Header from "../components/Layout/Header/header"
import Footer from "../components/Layout/Footer/footer"
import Policy from "../components/Layout/Policy/policy"
import Contact from "../components/Contact/contact"

const ContactPage = () => {
  return (
    <React.Fragment>
        <Header />
        <Contact />
        <Policy />
        <Footer />
    </React.Fragment>
  )
}

export default ContactPage