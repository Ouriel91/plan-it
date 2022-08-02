import {useEffect, useState} from 'react'
import ReactWeather from 'react-open-weather';

const Weather = ({lng, lat, location, date}) => {
  
  const [data, setData] = useState(
    {
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
  )

  const getFutureWeather = async () => {
    console.log("hiii11 ")
    const req = await fetch(`http://api.weatherapi.com/v1/future.json?key=c7fce279755d4f2787c151646220108&q=${lat},${lng}&dt=${date}`)
    if(req.statusText === "Bad Request") //can happen because event is less than 14 days or above 300 days, so use 10 days from current date
    {
      console.log("hiii2d")
      const newReq = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c7fce279755d4f2787c151646220108&q=${lat},${lng}&days=10&aqi=no&alerts=no`)
      const res = await newReq.json()
      console.log("res", res);
      const description = res.current.condition.text
      const icon = res.current.condition.icon
      const forecast = res.forecast.forecastday[9] //for 10 days from now
      const futureDate = forecast.date + ' (10 days from now)'
      setResData(description,futureDate,forecast,icon)
      return
    }
    console.log("hiii3 ")
    const res = await req.json()
    const forecast = res.forecast.forecastday[0]
    const futureDate = forecast.date
    const description = res.forecast.forecastday[0].day.condition.text
    const icon = res.forecast.forecastday[0].day.condition.icon
    setResData(description,futureDate,forecast,icon)
  } 

  const setResData = (description,futureDate,forecast,icon) => {
    const avgTemp = forecast.day.avgtemp_c
    const minTemp = forecast.day.mintemp_c
    const maxTemp = forecast.day.maxtemp_c
    const wind = forecast.day.maxwind_kph
    const humidity = forecast.day.avghumidity

    const overollData = {
      forecast:[],
      current: {
          date: futureDate,
          description: description,
          icon: icon,
          temperature: { current: avgTemp, min: minTemp, max: maxTemp },
          wind: wind,
          humidity: humidity,
        },
    }
    console.log("overollData",overollData)
    setData(overollData)
  }

  useEffect(() => {
    getFutureWeather()
  },[])
  
  /* const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'YOUR-API-KEY',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  }) */
  
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