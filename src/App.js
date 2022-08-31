import  {Route, Routes, BrowserRouter } from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles'

import './App.css';
import Welcome from './pages/Welcome'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home';
import Class from './pages/Class';
import Leaderboard from './pages/Leaderboard'

const App = () => {
  const THEME = createTheme ({
    typography : {
      fontFamily: 'Chilanka,cursive'
    }
  })

  return (
    <ThemeProvider theme = {THEME}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="home" element={<Home />} />
          <Route path="class" element={<Class />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Routes>
    </BrowserRouter>
  </ThemeProvider>
  )
};

export default App;
