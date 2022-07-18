import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InfoUser from './pages/InfoUser';
import './style/App.css';
import HomePage from './pages/HomePage';
import { Theme } from './style/Theme';
import "swiper/css";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import DaftarJual from './pages/DaftarJual';
import InfoProduk from './pages/InfoProduk';
import DetailProductSeller from './pages/DetailProductSeller';
import DetailProductBuyer from './pages/DetailProductBuyer';
import AkunSaya from './pages/AkunSaya';
import Notification from './pages/Notification';
import InfoPenawar from './pages/InfoPenawar';
import Wishlist from './pages/Wishlist';
import React from 'react';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import DetailProductDrawer from './components/drawer/DetailProductDrawer';
import ModalDeleteWishlist from './components/detailproduct/buyer/ModalDeleteWishlist';

function App() {
  return (
    <>
      <BrowserRouter forceRefresh={true}>
        <ThemeProvider theme={Theme}>
          <Routes>
            <Route path='*' element={<><h1 className='text-center'>404 ERROR</h1></>} />
            <Route exact path='/' element={<ProtectedRoutes />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/info-user/:id' element={<InfoUser />} />
              <Route path='/myaccount' element={<AkunSaya />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/notifikasi' element={<Notification />} />
              <Route path='/info-produk' element={<InfoProduk />} />
              <Route path='/info-produk/update/:id' element={<InfoProduk />} />
              <Route path='/daftar-jual' element={<DaftarJual />} />
              <Route path='/detail-product-seller/:id' element={<DetailProductSeller />} />
              <Route path='/detail-product-buyer/:id' element={<DetailProductBuyer />} />
              <Route path='/info-penawar/:id' element={<InfoPenawar />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
