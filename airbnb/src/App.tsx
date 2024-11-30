
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Hero from './Components/Product/Hero';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Hero />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App