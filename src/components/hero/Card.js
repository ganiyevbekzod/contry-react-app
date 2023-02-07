import './card.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Card = ({ obj }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`card ${theme}`}>
      <img
        src={obj.flags.svg}
        width='300'
        height='180'
        alt='card img'
      />
      <div className='card-body'>
        <h3 className='card-title mb-4'>{obj.name.common}</h3>
        <p className='card-desc'>
          <span className='card-desc-style'>Population:</span>
          {obj.population}
        </p>
        <p className='card-desc'>
          <span className='card-desc-style'>Region:</span> {obj.region}
        </p>
        <p className='card-desc'>
          <span className='card-desc-style'>Capital:</span> {obj.capital}
        </p>
        <NavLink
          className='text-decoration-none text-white bg-primary mt-3 py-2 rounded px-3 d-inline-block'
          to={`/name/${obj.name.common}`}
        >
          Learn more...
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
