import React from 'react';
import {useWeather} from "../context/Weather"

const Input = () => {
    const weather=useWeather();
    console.log(weather);
    return (
        <input className="inputfield"
        placeholder="Search here"
            
        value={weather.searchCity}
            onChange={(e)=>weather.setSearchcity(e.target.value)}
            


        />
    )};

export default Input;