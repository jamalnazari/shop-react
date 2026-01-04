
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter as   Router, Routes , Route } from 'react-router-dom'
import Shop from './pages/shop.jsx';
import Cart from './pages/cart.jsx';
import Navbar from './navbar/nav.jsx';
import { Serch } from './pages/serchbar.jsx';
import Form from './pages/form.jsx';
import { Navbar2 } from './navbar/Nav2.jsx';
import Apiprovider from './context/Apicontext.jsx'
import CategoryPage from './pages/catepages.jsx';
import { Dastehha } from './pages/Dastehbandi.jsx';
function App() {
  return (
    <div className=''>
        <Apiprovider>
            <Router>
              <Navbar />
              <Routes>
                <Route path='/' element={<Shop/>}/>
                <Route path='/shop-react/cart' element={<Cart/>}/>
                <Route path='/login' element={<Form/>}/>
                <Route path='/serch' element={<Serch/>}/>
                <Route path='/category/:slug' element={<CategoryPage/>}/>
                <Route path='/Dastehha' element={<Dastehha/>}/>
              </Routes>
              <Navbar2/>
            </Router>
        </Apiprovider>
    </div>
  )
}

export default App
