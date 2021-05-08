import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>See what has been discovered!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-1.jpg'
              text='Earth From Space'
              label='Photography'
              path='/News'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='New images from NASA'
              label='Photography'
              path='/News'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img src='/images/img-3.jpg'
              text='Summer Solstice'
              label='Constellations'
              path='/Constellations'
            />
            <CardItem
              img src='/images/img-4.jpg'
              text='What can the stars tell you?'
              label='Astrology'
              path='/Astrology'
            />

            <CardItem
              img src='/images/img-5.jpg'
              text='The Event Horizon'
              label='Science'
              path='/News'
            />
           
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;