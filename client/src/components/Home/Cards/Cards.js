import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Beauty services at your home</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
              src='https://i.ibb.co/P18JShr/poster1.jpg'
              text='Salon and massage at home for Women'
              label='Salon'
              path='/services'
            />

            <CardItem
              src='https://i.ibb.co/X54ZBjp/men.jpg'
              text='Salon and massage at home for Men'
              label='Salon'
              path='/services'
            />

          </ul>

          <ul className='cards__items'>
            <CardItem
              src='https://i.ibb.co/4ZXs4XL/appliances.jpg'
              text='Appliances services and Electricians '
              label='Appliances'
              path='/services'
            />

            <CardItem
              src='https://i.ibb.co/XJGQH0c/plumber.jpg'
              text='Plumbers and Carpenters'
              label='plumber & carpenters'
              path='/products'
            />

            <CardItem
              src='https://i.ibb.co/VS3TL9G/pest-control.jpg'
              text='pest control and Cleaning & disinfection'
              label='Cleaning'
              path='/sign-up'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;