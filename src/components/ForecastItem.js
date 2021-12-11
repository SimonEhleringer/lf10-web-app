import React from 'react';
import Description from './Description';
import './ForecastItem.css';
import Temperature from './Temperature';

const ForecastItem = ({ item }) => {
  return (
    <div className='forecast-item'>
      <div className='forecast-item__heading'>{item.heading}</div>

      <img
        width={75}
        alt='weather-icon'
        src={`http://openweathermap.org/img/w/${item.icon}.png`}
      />

      <div className='forecast-item__min-max'>
        <Temperature temp={item.min} fontSize={20} text='Min:' />
        <Temperature temp={item.max} fontSize={20} text='Max:' />
      </div>

      <div className='forecast-item__description'>
        <Description text={item.description} fontSize={20} />
      </div>
    </div>
  );
};

export default ForecastItem;
