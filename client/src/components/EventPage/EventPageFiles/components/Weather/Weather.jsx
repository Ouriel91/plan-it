import {useEffect, useState} from 'react'
import ReactWeather from 'react-open-weather';

const Weather = ({lng, lat, location, date}) => {
  
  /* const [data, setData] = useState({}) */

  const getFutureWeather = async () => {
    let req = await fetch(`http://api.weatherapi.com/v1/future.json?key=c7fce279755d4f2787c151646220108&q=${lat},${lng}&dt=${date}`)
    if(req.statusText === "Bad Request") //can happen because event is less than 14 days or above 300 days, so use 10 days from current date
    {
      req = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c7fce279755d4f2787c151646220108&q=${lat},${lng}&days=10&aqi=no&alerts=no`)
      const res = await req.json()
      const description = res.current.condition.text
      const icon = res.current.condition.icon
      console.log("icon", icon);
      const forecast = res.forecast.forecastday[9] //for 10 days from now
      const futureData = forecast.date + '(10 days from now)'
      const avgTemp = forecast.day.avgtemp_c
      const minTemp = forecast.day.mintemp_c
      const maxTemp = forecast.day.maxtemp_c
      const wind = forecast.day.maxwind_kph
      const humidity = forecast.day.avghumidity
    }
    
    //avgtemp_c - min and max also in this way - v
    //maxwind_kph
    //avghumidity
    //current avg, min, max, wind,humidity
    //description -v
    //icon - v
    
  }

  useEffect(() => {
    getFutureWeather()
  },[])
  
  
  /* const { data,isLoading, errorMessage } = useOpenWeather({
    key: "594a5f10e868634b3d1262fc6f29d121",
    lat: lat,
    lon: lng,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  }) */
  
  
  const data = {
    forecast:[],
    current: {
        date: "01 Aug 2022",
        description: 'Clear',
        icon:'//cdn.weatherapi.com/weather/64x64/night/116.png',
        temperature: { current: '-2', min: -3, max: 1 },
        wind: '2',
        humidity: 90,
      },
  }
  
  return (
    <div className='weather'>
    <ReactWeather
      isLoading={false}
      errorMessage={null}
      data={data}
      lang="en"
      locationLabel={location}
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
    </div>
  );
};

export default Weather;