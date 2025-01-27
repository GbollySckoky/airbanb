
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Hero from './Components/Product/Hero';
import ProductDetailsHero from './Components/Product/ProductDetaails/ProductDetailsHero';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Hero />} />
        <Route path='/product_details/:id' element={ <ProductDetailsHero />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App