import axios from 'axios';
import Form from '../src/Components/Form';
import { useState,useEffect } from 'react';
import {usePosition } from 'use-position';


const App = () => {
  const [ weather,setWeather] = useState();
  const { latitude, longitude} = usePosition();

  const getWeatherData = async(lat,lon) => {
   const key = '0a20b1ae35ee69feea5e16009e4e77bb';
   const lang = navigator.language.split("-")[0];
   try{
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`
    );

   setWeather(data);
   }
   catch{
    alert('Something Went Wrong...')
   }
  }

  useEffect(() =>{
    latitude && longitude && getWeatherData(latitude,longitude);
  }, [latitude, longitude])
  

  return (
    <div>
      <h2>Weather App</h2> 
    <Form  weather = {weather}/>
    </div>
  )
}

export default App

