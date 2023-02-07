import './hero.scss';
import Card from './Card';

const Hero = ({ country, setCountry }) => {
  return (
    <section className='hero'>
      <div className='container'>
        <h2 className='visually-hidden'>Country's</h2>
        <div className='hero__inner'>
          {country.isLoading ? (
            <h2 className='text-center display-2 my-5 fw-bold'>Loading...</h2>
          ) : (
            ''
          )}
          {country.isError ? <h2>{country.isError}</h2> : ''}
          {country.data.length
            ? country.data.map((el) => {
                return <Card obj={el} />;
              })
            : ''}
        </div>
      </div>
    </section>
  );
};

export default Hero;
