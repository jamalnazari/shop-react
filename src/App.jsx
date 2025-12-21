
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter as   Router, Routes , Route } from 'react-router-dom'
import Shop from './pages/shop.jsx';
import Cart from './pages/cart.jsx';
import Navbar from './navbar/nav.jsx';
import {Shopcontextprovider} from './context/shopcontext.jsx'
import { Serch } from './pages/serchbar.jsx';
import Form from './pages/form.jsx';
import { Navbar2 } from './navbar/Nav2.jsx';
function App() {
  return (
    <div className=''>
      <Shopcontextprovider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/shop-react/' element={<Shop/>}/>
          <Route path='/shop-react/cart' element={<Cart/>}/>
          <Route path='/login' element={<Form/>}/>
          <Route path='/serch' element={<Serch/>}/>
        </Routes>
        <Navbar2/>
      </Router>
      </Shopcontextprovider>
    </div>
  )
}

export default App
