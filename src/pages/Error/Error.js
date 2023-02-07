import ErrImg from '../../assets/images/404error-img.svg';

const Error = () => {
  return (
    <>
      <img
        className='d-block mx-auto'
        width='560px'
        height='600px'
        src={ErrImg}
        alt='404 Error'
      />
    </>
  );
};

export default Error;
