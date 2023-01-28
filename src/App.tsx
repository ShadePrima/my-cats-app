import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Breeds from './pages/Breeds/Breeds';
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home';
import Voting from './pages/Voting/Voting';
import './styles/main.scss';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='voting' element={<Voting />} />
        <Route path='breeds' element={<Breeds />} />
        <Route path='gallery' element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
