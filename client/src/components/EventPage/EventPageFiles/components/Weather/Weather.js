import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Weather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '79bdb1f1d2a7353cea791e9d167ec309',
    lat: '48.137154',
    lon: '11.576124',
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
      locationLabel="Tel-Aviv"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
    </div>
  );
};

export default Weather;