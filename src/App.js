
import { useEffect } from 'react';
import './App.css';
import Header from './component/layout/Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home';
import ProductDetails from './component/Product/ProductDetails'
import Products from './component/Product/Products'
import Search from "./component/Product/Search";
import LoginSignUp from './component/User/LoginSignUp';
import store from './store'
import { loadUser } from './redux/actions/userActions';
import UserOptions from './component/layout/Header/UserOptions';
import { useSelector } from 'react-redux';
import Profile from './component/User/Profile';
import UpdateProfile from './component/User/UpdateProfile';
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from './component/User/ForgotPassword';
import ResetPassword from './component/User/ResetPassword';

function App() {

  const {user,isAuthenticated}=useSelector((state)=>state.user);
 
  
useEffect(()=>{
  WebFont.load({
    google: {
      families: ["Roboto", "Droid Sans", "Chilanka"],
    },
  })

  store.dispatch(loadUser());
},[])

  return (
  <BrowserRouter>
  <Header />
  { isAuthenticated && <UserOptions user={user} />}
  <Routes>

    
    <Route path='/' element={<Home />} />
    <Route  path='/product/:id' element={<ProductDetails />}/>
    <Route path='/products' element={<Products />} />
    <Route path='/products/:keyword' element={<Products />} />
    <Route path="/search" element={<Search />} />

    <Route path='/login' element={<LoginSignUp />} />
    <Route path='/account' element={<Profile />}/>

    <Route path='/me/update' element={<UpdateProfile />} />
    <Route path='/password/update' element={<UpdatePassword />} />
    <Route path='/password/forgot' element={<ForgotPassword />}/>

    <Route path='/password/reset/:token' element={<ResetPassword />} />
    


  </Routes>

  <Footer />
  </BrowserRouter>
  );
}

export default App;
