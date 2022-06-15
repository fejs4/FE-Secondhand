import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { theme } from './style/Theme';
import "swiper/css";

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import DetailProductPage from './pages/DetailProductPage';
import DaftarJual from './pages/DaftarJual';
import InfoProduk from './pages/InfoProduk';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/detail/:Id' element={<DetailProductPage/>} />
            <Route path='/info-produk' element={<InfoProduk/>} />
            <Route path='/daftar-jual' element={<DaftarJual/>} />
            <Route path='*' element={<><h1 className='text-center'>404 ERROR</h1></>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
