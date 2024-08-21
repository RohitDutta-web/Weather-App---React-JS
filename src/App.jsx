import axios from "axios";
import { useState } from "react";

import './App.css'
import search from './assets/search.png'
import acc from './assets/accelerometer-sensor.gif'




function App() {














  const [location, setLocation] = useState('');
  const [data, setData] = useState({});


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=252da01a1771493d21cee0a582817b96`;
  const searchLocation = () => {

    axios.get(url).then(response => {
      setData(response.data);
      console.log(response.data);
    })
    setLocation('');


  }











  const handleLocation = (e) => {
    setLocation(e.target.value);

  }







  return (
    <>
      <div className="header">
        <h1>Weather App</h1>
        <div className="search-location">
          <input type="text" value={location} onChange={handleLocation} placeholder="Enter Location" />
          <button onClick={searchLocation}   ><img src={search} alt="" /></button></div>
      </div>



      <div className="card">
        <div className="location-info">

          {data.name}
        </div>

        <div className="info">


          <div className="temp-info">
            {data.main ? <div className="temp">{data.main.temp.toFixed()}°C</div> : null}

            {data.weather ? <div className="condition" >{data.weather[0].main}</div> : null}
          </div>




          <div className="icon"><img src={acc} alt="Icon" /></div>

        </div>

      </div>

      {data.main ? <div className="temp-detail">
        <div className="feels-like"><p>Feels Like</p>{data.main.feels_like.toFixed()}°C</div>
        <div className="max-temp"><p>Max Temperature</p>{data.main.temp_max.toFixed()}°C</div>
        <div className="min-temp"><p>Min Temperature</p>{data.main.temp_min.toFixed()}°C</div>
      </div> : null}

      {data.main && data.wind ? <div className="other-detail">
        <div className="pressure"><p>Pressure</p>{data.main.pressure}hPa</div>
        <div className="humidity"><p>Humidity</p>{data.main.humidity}%</div>
        <div className="wind-info"><p>Wind Speed and Direction</p>{data.wind.speed}m/s / {data.wind.deg}°</div>
      </div> : null}



    </>
  )
}


export default App;
