import React from 'react';
import { useWeather } from '../context/Weather';
const  Card=()=>{
    const weather=useWeather();
    return (
        <div>
            {/* <img scr ="mypic.png"/> */}
            <h2>{weather.data?.current?.temp_c} </h2>
            <h2>City name</h2>
        </div>
    )
};
export default Card;