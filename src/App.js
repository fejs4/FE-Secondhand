import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InfoUser from './pages/InfoUser';
import './style/App.css';
import HomePage from './pages/HomePage';
import { theme } from './style/Theme';
import "swiper/css";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import DaftarJual from './pages/DaftarJual';
import InfoProduk from './pages/InfoProduk';
import DetailProductSeller from './pages/DetailProductSeller';
import DetailProductBuyer from './pages/DetailProductBuyer';
import AkunSaya from './pages/AkunSaya';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/auth' element={<Login/>} />
            <Route path='/info-user' element={<InfoUser/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/akunsaya' element={<AkunSaya/>} />
            <Route path='/info-produk' element={<InfoProduk/>} />
            <Route path='/daftar-jual' element={<DaftarJual/>} />
            <Route path='/detail-product-seller/:Id' element={<DetailProductSeller/>} />
            <Route path='/detail-product-buyer/:Id' element={<DetailProductBuyer />} />
            <Route path='*' element={<><h1 className='text-center'>404 ERROR</h1></>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
