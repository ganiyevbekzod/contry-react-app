import Header from './components/header/Header';
import Sort from './components/form/Sort';
import Hero from '../src/components/hero/Hero';
import InfoCountry from './pages/InfoCuntry/InfoCountry';
import './assets/styles/index.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from './pages/Error/Error';

function App() {
  const [country, setCountry] = useState({
    isLoading: false,
    data: [],
    isError: '',
  });

  useEffect(() => {
    setCountry({
      ...country,
      isLoading: true,
    });
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCountry({
            ...country,
            isLoading: false,
            data: data,
          });
        }
      })
      .catch((err) => {
        if (err) {
          setCountry({
            ...country,
            isLoading: false,
            data: [],
            isError: err.message,
          });
        }
      });
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='*'
          element={<Error />}
        />
        <Route
          path='/'
          element={
            <Sort
              country={country}
              setCountry={setCountry}
            >
              <Hero
                country={country}
                setCountry={setCountry}
              />
            </Sort>
          }
        />
        <Route
          path='/name/:name'
          element={<InfoCountry />}
        />
      </Routes>
    </>
  );
}

export default App;
