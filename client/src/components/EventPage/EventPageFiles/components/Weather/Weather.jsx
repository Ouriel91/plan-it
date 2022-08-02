import {useEffect, useState} from 'react'
import ReactWeather, {useOpenWeather} from 'react-open-weather';

const Weather = ({lng, lat, location, date}) => {
  const [data, setData] = useState(
    {
    forecast:[],
    current: {
        date: "01 Aug 2022",
        description: 'Clear',
        temperature: { current: '-2', min: -3, max: 1 },
        wind: '2',
        humidity: 90,
      },
    } 
  )

  const getFutureWeather = async (lat, lng, date) => {
    const req = await fetch(`http://api.weatherapi.com/v1/future.json?key=${process.env.REACT_APP_WEATHER_API_14_DAYS}&q=${lat},${lng}&dt=${date}`)
    if(req.statusText === "Bad Request") //can happen because event is less than 14 days or above 300 days, so use 10 days from current date
    {
      const newReq = await fetch( `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_14_DAYS}&q=${lat},${lng}&days=10&aqi=no&alerts=no`)
      const res = await newReq.json()
      const description = res.current.condition.text
      const forecast = res.forecast.forecastday[9] //for 10 days from now
      const futureDate = forecast.date + ' (10 days from now)'
      setResData(description,futureDate,forecast)
      return
    }
    const res = await req.json()
    const forecast = res.forecast.forecastday[0]
    const futureDate = forecast.date
    const description = res.forecast.forecastday[0].day.condition.text
    setResData(description,futureDate,forecast)
  } 

  const setResData = (description,futureDate,forecast) => {
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
          temperature: { current: avgTemp, min: minTemp, max: maxTemp },
          wind: wind,
          humidity: humidity,
        },
    }
    setData(overollData)
  }

  useEffect(() => {
    if(lat === 0 || lng === 0) return
    getFutureWeather(lat, lng, date)
  },[lat, lng])
  
  return (
    <div className='weather' style={{width: '40%'}}>
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