import React, { useEffect, useState } from 'react';
import { API_KEY } from '../constants';
import './Current.css';
import Description from './Description';
import Temperature from './Temperature';

const Current = ({ city, country }) => {
  const [icon, setIcon] = useState(undefined);
  const [temp, setTemp] = useState(undefined);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [successfullyLoaded, setSuccessfullyLoaded] = useState(false);

  useEffect(() => {
    const getWeather = async () => {
      setSuccessfullyLoaded(false);

      if (!city || !country) {
        return;
      }

      try {
        const api_call = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
        );

        const response = await api_call.json();

        setIcon(response.weather[0].icon);
        setTemp(response.main.temp);
        setMin(response.main.temp_min);
        setMax(response.main.temp_max);
        setDescription(response.weather[0].description);

        setSuccessfullyLoaded(true);
      } catch (e) {
        console.log(e);
      }
    };

    getWeather();
  }, [city, country]);

  return (
    <>
      {city && country && successfullyLoaded && (
        <div className='current'>
          <img
            width={75}
            alt='weather-icon'
            src={`http://openweathermap.org/img/w/${icon}.png`}
          />

          <div className='current__temp'>
            <Temperature temp={temp} fontSize={30} />
          </div>

          <div className='current__min-max'>
            <Temperature temp={min} fontSize={20} text='Min:' />
            <Temperature temp={max} fontSize={20} text='Max:' />
          </div>

          <div className='current__description'>
            <Description text={description} fontSize={20} />
          </div>
        </div>
      )}
    </>
  );
};

export default Current;
