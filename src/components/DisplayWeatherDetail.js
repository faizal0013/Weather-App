import { useContext, useEffect, useState } from 'react';

import Axios from 'axios';

import NameContext from '../context/name-context';

const DisplayWeatherDetail = () => {
  const [celsius, setCelsius] = useState(' ');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Search Now');

  const { name } = useContext(NameContext);

  useEffect(() => {
    setLoading(true);

    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then(res => res.data)
      .then(data => {
        const { temp } = data.main;

        setLoading(false);

        // temp - 273.15
        setCelsius(Math.round(temp - 273.15));
        return temp;
      })
      .catch(err => {
        const { message } = err.response.data;

        if (message === 'city not found') {
          setErrorMessage(message);
        }
      });
  }, [name]);

  return (
    <>
      <div className="bg-amber-200 rounded-2xl w-96 h-[35rem] p-8 drop-shadow-2xl">
        <div className="font-bold text-3xl mb-7 sm:text-lg md:text-xl lg:text-2xl">Today</div>
        <div className="flex justify-center items-center flex-col h-40 mx-5 my-8 shadow-lg bg-amber-300 shadow-slate-900 rounded-lg font-bold">
          {loading && <p className="text-2xl sm:text-lg md:text-xl lg:text-2xl">{errorMessage}</p>}
          {!loading && <p className="text-2xl">{celsius}&#8451;</p>}
        </div>
        <div className="flex justify-center items-center">
          <p className="text-6xl capitalize sm:text-2xl md:text-3xl lg:text-4xl">{name}</p>
        </div>
      </div>
    </>
  );
};

export default DisplayWeatherDetail;
