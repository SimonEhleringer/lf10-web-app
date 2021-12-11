import React, { useEffect, useState } from 'react';
import { API_KEY } from '../constants';
import './Forecast.css';
import ForecastItem from './ForecastItem';

const Forecast = ({ city, country }) => {
  const [days, setDays] = useState([]);
  const [successfullyLoaded, setSuccessfullyLoaded] = useState(false);

  useEffect(() => {
    const getWeather = async () => {
      setSuccessfullyLoaded(false);

      if (!city || !country) {
        return;
      }

      try {
        const api_call = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&cnt=3&appid=${API_KEY}`
        );

        const response = await api_call.json();

        setDays([]);

        for (let i = 0; i < response.list.length; i++) {
          const day = response.list[i];

          setDays((old) => {
            return [
              ...old,
              {
                icon: day.weather[0].icon,
                min: day.main.temp_min,
                max: day.main.temp_max,
                description: day.weather[0].description,
                heading: `in ${(i + 1) * 3} hours...`,
              },
            ];
          });
        }

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
        <div className='forecast'>
          {days.map((day) => {
            return (
              <div className='forecast__forecast-item'>
                <ForecastItem item={day} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Forecast;
