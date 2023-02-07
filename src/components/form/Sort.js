import './sort.scss';
import { useContext, useRef } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Sort = ({ setCountry, children }) => {
  const { theme } = useContext(ThemeContext);

  let elInput = useRef();
  let elSelect = useRef();

  const handleChange = () => {
    if (elInput.current.value !== '') {
      fetch(
        `https://restcountries.com/v3.1/name/${elInput.current.value.toLowerCase()}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setCountry({
              isLoading: false,
              data: data,
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setCountry({ isLoading: false, data: data });
          }
        })
        .catch((err) => {
          if (err) {
            setCountry({ isError: err.message });
          }
        });
    }
  };

  const sortCountrys = () => {
    fetch('https://restcountries.com/v3.1/region/' + elSelect.current.value)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCountry({ isLoading: false, data: data });
        }
      });
  };

  return (
    <main className={theme}>
      <section className='sort'>
        <div className='container'>
          <div className='sort__inner'>
            <form className='sort__form'>
              <label
                className='sort__label'
                for='focus'
              >
                <input
                  onChange={(evt) => handleChange(evt.target.value)}
                  ref={elInput}
                  className='sort__input '
                  id='focus'
                  type='text'
                  placeholder='Search for a country…'
                />
              </label>
              <select
                className='sort__select'
                onChange={sortCountrys}
                ref={elSelect}
              >
                <option
                  selected
                  disabled
                >
                  Filter by Region
                </option>
                <option value='Africa'>Africa</option>
                <option value='America'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
              </select>
            </form>
          </div>
        </div>
      </section>
      {children}
    </main>
  );
};

export default Sort;
