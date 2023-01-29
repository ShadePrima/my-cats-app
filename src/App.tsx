import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Breeds from './pages/Breeds/Breeds';
import Dislike from './pages/Dislike/Dislike';
import Gallery from './pages/Gallery/Gallery';
import FavouritesPage from './pages/HeaertPage/FavouritesPage';
import Home from './pages/Home/Home';
import LikePage from './pages/LikePage/LikePage';
import Voting from './pages/Voting/Voting';
import './styles/main.scss';

function App() {
  const [item, setItem] = React.useState<any>();
  console.log(item, 'item');

  React.useEffect(() => {
    axios
      .get(
        'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_xbu04NfIXvRe0ID6A8WPyOAD0yE5YMvOKnPgLMeWqeQvBCUkKgzBf5xMcYDFxsRB'
      )
      .then((res) => setItem(res));
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='voting' element={<Voting />} />
        <Route path='breeds' element={<Breeds />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='like' element={<LikePage />} />
        <Route path='favourite' element={<FavouritesPage />} />
        <Route path='dislike' element={<Dislike />} />
      </Routes>
    </div>
  );
}

export default App;
