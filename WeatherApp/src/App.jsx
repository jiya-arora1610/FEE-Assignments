import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  async function searchWeather() {
    if (!city) {
      alert('Enter a city')
      return
    }

    let response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    )

    let data = await response.json()

    if (!data.results) {
      alert('City not found')
      return
    }

    let latitude = data.results[0].latitude
    let longitude = data.results[0].longitude

    let weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
    )

    let weatherData = await weatherResponse.json()

    setWeather(weatherData.current)
  }

  return (
    <div className="App">
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={event => setCity(event.target.value)}
      />

      <button onClick={searchWeather}>Search</button>

      {weather && (
        <div>
          <h2>Weather</h2>
          <p>Temperature: {weather.temperature_2m}°C</p>
          <p>Humidity: {weather.relative_humidity_2m}%</p>
          <p>Wind Speed: {weather.wind_speed_10m} km/h</p>
        </div>
      )}
    </div>
  )
}

export default App