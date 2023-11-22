import { Fragment } from "react"
import Cart from "../components/Card/Card"
import Header from "../components/Layout/Header/header"
import Footer from "../components/Layout/Footer/footer"

const CartPage = () => {
  return (
    <Fragment>
        <Header />
        <Cart />
        <Footer />
    </Fragment>
  )
}

export default CartPage;