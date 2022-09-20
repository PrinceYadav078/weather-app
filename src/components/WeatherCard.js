import React, { useState ,useEffect} from 'react'

const WeatherCard = ({tempInfo}) => {
    const [weatherIcon, setWeatherIcon]=useState("")
    let sec=tempInfo.sunset
    let date= new Date(sec * 1000)
    let sunsetTime= `${date.getHours()}:${date.getMinutes()}`
    
    useEffect(()=>{
        if(tempInfo.weathermood){
            switch (tempInfo.weathermood) {
                case "Clouds":
                    setWeatherIcon("wi-day-cloudy")
                    break;
                case "Haze":
                    setWeatherIcon("wi-fog")
                    break;
                case "Clear":
                    setWeatherIcon("wi-day-sunny")
                    break;
                case "Mist":
                    setWeatherIcon("wi-dust")
                    break;
                case "Rain":
                    setWeatherIcon("wi-rain")
                    break;
                default:
                    setWeatherIcon("wi-day-cloudy")
                    break;
            }
        }
    }, [tempInfo.weathermood])
  return (
    <>
    {/* TEMP CARD */}
   <article className='widget'>
    <div className='weatherIcon'>
        {console.log(weatherIcon)}
        <i className={`wi ${weatherIcon}`}></i>
        <div className='weatherInfo'>
        <div className='temperature'>
            <span>{tempInfo.temp}&deg;</span>
        </div>
        <div className='description'>
            <div className='weatherCondition'>{tempInfo.weathermood}</div>
            <div className='place'>{tempInfo.city}, {tempInfo.country}</div>
        </div>
    </div>
    </div>
  

     {/* our 4colomn section */}
     <div className='extra-temp'>
        <div className='temp-info-minmax'>
            <div className='two-sided-section'>
                <p><i className={'wi wi-sunset'}></i></p>
                <p className='extra-info-leftside'>
                    {sunsetTime} PM <br/>
                    Sunset
                </p>
            </div>
            <div className='two-sided-section'>
                <p><i className={'wi wi-humidity'}></i></p>
                <p className='extra-info-leftside'>
                    {tempInfo.humidity} <br/>
                    Humidity
                </p>
            </div>
        </div>
        
        <div className='weather-extra-info'>
        <div className='two-sided-section'>
                <p><i className={'wi wi-rain'}></i></p>
                <p className='extra-info-leftside'>
                    {tempInfo.pressure} <br/>
                    Pressure
                </p>
            </div>

            <div className='two-sided-section'>
                <p><i className={'wi wi-strong-wind'}></i></p>
                <p className='extra-info-leftside'>
                    {tempInfo.speed} <br/>
                    Speed
                </p>
            </div>
        </div>
    </div>
    
    <div className='date'> {new Date().toLocaleString()}</div>
    
   
   </article>
    </>
  )
}

export default WeatherCard