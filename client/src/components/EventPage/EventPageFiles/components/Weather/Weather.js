import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Weather = ({lng, lat, location}) => {
  console.log(lng, lat, location)
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "594a5f10e868634b3d1262fc6f29d121",
    lat: lat,
    lon: lng,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <div className='weather'>
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
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