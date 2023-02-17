import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Breeds from './pages/Breeds/Breeds';
import Dislike from './pages/Dislike/Dislike';
import Gallery from './pages/Gallery/Gallery';
import FavouritesPage from './pages/HeaertPage/FavouritesPage';
import Home from './pages/Home/Home';
import LikePage from './pages/LikePage/LikePage';
import Voting from './pages/Voting/Voting';
import { setDataBreed } from './redux/slices/oneBreed/slice';
import { setData } from './redux/slices/breeds/slice';
import './styles/main.scss';

function App() {
  const dispatch = useDispatch();
  let keyBreed = useSelector((state: any) => state.oneBreed.keyBreed);
  let limit = useSelector((state: any) => state.oneBreed.limit);
  let order = useSelector((state: any) => state.oneBreed.order);

  if (!keyBreed) {
    keyBreed = 'abys';
  }

  const [voting, setVoting] = React.useState<any>();
  const [favourites, setFavourites] = React.useState<any>();

  // items Get current breeds
  React.useEffect(() => {
    const getOneBreed = async () => {
      const API_KEY =
        'live_xbu04NfIXvRe0ID6A8WPyOAD0yE5YMvOKnPgLMeWqeQvBCUkKgzBf5xMcYDFxsRB';

      const result = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${keyBreed}&order=${order}&api_key=${API_KEY}`
      );
      dispatch(setDataBreed(result.data));
    };
    getOneBreed();
  }, [keyBreed, dispatch, limit, order]);

  //get all breeds
  React.useEffect(() => {
    const getAllBreeds = async () => {
      const API_KEY =
        'live_xbu04NfIXvRe0ID6A8WPyOAD0yE5YMvOKnPgLMeWqeQvBCUkKgzBf5xMcYDFxsRB';

      const result = await axios.get(
        `https://api.thecatapi.com/v1/breeds?&api_key=${API_KEY}`
      );
      dispatch(setData(result.data));
    };
    getAllBreeds();
  }, []);

  // one breed
  // React.useEffect(() => {
  //   const API_KEY =
  //     'live_xbu04NfIXvRe0ID6A8WPyOAD0yE5YMvOKnPgLMeWqeQvBCUkKgzBf5xMcYDFxsRB';

  //   axios
  //     .get(
  //       `https://api.thecatapi.com/v1/images/search?breed_ids=beng&api_key=${API_KEY}`
  //     )
  //     .then((res) => setBreeds(res));
  // }, []);

  React.useEffect(() => {
    const API_KEY =
      'live_xbu04NfIXvRe0ID6A8WPyOAD0yE5YMvOKnPgLMeWqeQvBCUkKgzBf5xMcYDFxsRB';

    axios
      .get(
        `https://api.thecatapi.com/v1/votes?limit=10&order=DESC&api_key=${API_KEY}`
      )
      .then((res) => setVoting(res));
  }, []);

  //favourites
  React.useEffect(() => {
    const API_KEY =
      'live_xbu04NfIXvRe0ID6A8WPyOAD0yE5YMvOKnPgLMeWqeQvBCUkKgzBf5xMcYDFxsRB';

    axios
      .get(
        `https://api.thecatapi.com/v1/favourites?limit=20&order=DESC&api_key=${API_KEY}`
      )
      .then((res) => setFavourites(res));
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
