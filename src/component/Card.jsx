import React from 'react';
import { useWeather } from '../context/Weather';
const  Card=()=>{
    const weather=useWeather();
    return (
        <div className="card">
            <img scr ={weather?.data?.current?.condition?.icon}/>
            <h2>{weather.data?.current?.temp_c} </h2>
            <h2>{weather.data?.location?.name},{weather.data?.location?.region}</h2>
        </div>
    )
};
export default Card;