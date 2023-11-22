import Header from './components/Layout/Header/header';
import './App.css'
import Footer from './components/Layout/Footer/footer';
import Policy from './components/Layout/Policy/policy';
import Sliders from './components/Slider/slider';
import Categories from './components/Categories/categories';
import Products from './components/Products/products';

function App() {
 

  return (
   <div>
    <Header/>
      <Sliders/>
      <Categories/>
      <Products/>
      <Policy/>
      <Footer/>
   </div>
     
  );
}

export default App
