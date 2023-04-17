import { useEffect, useState } from 'react';
import colors from './utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCity } from './reducers/weather/actions';
import { Card } from './components/Card';

function App() {

  const dispatch = useDispatch();
  const {loaded, weather, main, wind} = useSelector( state => {
    return {
      loaded: state.weather.loaded,
      weather: state.weather.cityWeather.weather[0],
      main: state.weather.cityWeather.main,
      wind: state.weather.cityWeather.wind
    }
  })

  let color = {}
  
  switch(weather.main) {
      case 'Clear':
      color = {...colors.clean};
      break;
      case 'Rain':
      color = {...colors.rain};
      break;
      case 'Snow':
      color = {...colors.snow};
      break;
      case 'Clouds':
      color = {...colors.cloud};
      break;
      default:
      console.log('hello')
  }

  useEffect(() => {
    if(!loaded) {
      dispatch(fetchCity('orenburg'))
    } 
  }, [loaded])

  return (
    <div className={`${color.background_color} h-screen ease-in-out`}>
      <div className="container mx-auto flex justify-center h-full">
        {
          loaded
          ? <Card weather={weather} main={main} wind={wind} color={color}></Card>
          : 
          <>
            Loading...
          </>
        }
      </div>
    </div>
  );
}

export default App;
