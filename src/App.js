import { ThemeProvider } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Auth';
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
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
