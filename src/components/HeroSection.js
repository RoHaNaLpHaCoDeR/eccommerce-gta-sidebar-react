import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video_gta.mp4' autoPlay loop muted />
      <h1>GRAND THEFT AUTO</h1>
      <p>Exclusive Accesories and Awesome Products!!</p>
      <div className='hero-btns'>
        <Button
          to='/customer/access/signup'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        GET STARTED
        </Button>
        <Button
          to="/trailer"
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
        WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
