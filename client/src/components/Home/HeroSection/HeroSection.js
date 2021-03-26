import React from 'react';
import '../../../App.css';
import './HeroSection.css';
import Search from '../../Search/Search';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>URBAN SERVICES</h1>
      <p>Home services, on demand.</p>
      <div className='hero-btns'>
        <Search/>
      </div>
    </div>
  );
}

export default HeroSection;




// {/* <Button
//   className='btns'
//   buttonStyle='btn--outline'
//   buttonSize='btn--large'
// >
//   GET STARTED
// </Button>
// <Button
//   className='btns'
//   buttonStyle='btn--primary'
//   buttonSize='btn--large'
//   onClick={console.log('hey')}
// >
//   WATCH TRAILER <i className='far fa-play-circle' />
// </Button> */}