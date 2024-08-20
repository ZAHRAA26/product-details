import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Sneakers from './pages/Sneakers/Sneakers'
import Collections from './pages/Collection/Collections'
import Men from './pages/Men/Men'
import Women from './pages/Women/Women'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

function App() {
  const [cartProducts, setCartProducts] = useState([])
  const addToCart = (product) => {
  const existingProduct = cartProducts.find(p => p.id === product.id);

  if (existingProduct) {
    setCartProducts(cartProducts.map(p =>
      p.id === product.id
        ? { ...p, noOfBuying: p.noOfBuying + product.noOfBuying }
        : p
    ));
  } else {
    setCartProducts([...cartProducts, { ...product, noOfBuying: product.noOfBuying }]);
  }
};
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout cartProducts={ cartProducts} />}  >
            <Route index element={<Sneakers addToCart={ addToCart} />}/>
            <Route path='/collections' element={<Collections/> }/>
            <Route path='/men' element={ <Men/>}/>
            <Route path='/women' element={<Women/>} />
            <Route path='/about' element={ <About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
