
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Hero from './Components/Product/Hero';
import ProductDetailsHero from './Components/Product/ProductDetails/ProductDetailsHero';
import Context from './Components/Context/Context';
import AllImages from './Components/Product/AllImages/AllImages';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Context>
      <Routes>
        <Route path='/' element={ <Hero />} />
        <Route path='/product_details/:id' element={ <ProductDetailsHero />} />
        <Route path='/product_details/:id/all_image' element={ <AllImages />} />
      </Routes>
      </Context>
    </BrowserRouter>
  )
}

export default App