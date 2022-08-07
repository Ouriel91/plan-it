import {useEffect, useState} from 'react'
import ReactWeather from 'react-open-weather';

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

    const givenDate = new Date(date)    
    let currentTime = new Date();

    const fromNow15Days = currentTime.setDate(currentTime.getDate()+15) //give 15 from now to make sure cover all api options (14-300 days)
    const newDate  = new Date(fromNow15Days).toISOString().slice(0,10)

    let sentDay
    if(givenDate < fromNow15Days){
      sentDay = newDate
    }
    else{
      sentDay = date
    }
    
    const req = await fetch(`http://api.weatherapi.com/v1/future.json?key=${process.env.REACT_APP_WEATHER_API_14_DAYS}&q=${lat},${lng}&dt=${sentDay}`)
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
    <div className='weather' style={{width: '23%'}}>
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