import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Auth';
import InfoUser from './pages/InfoUser';
import HomePage from './pages/HomePage';
import { Theme } from './style/Theme';

import "swiper/css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/auth' element={<Login/>} />
            <Route path='/info-user' element={<InfoUser/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
