import {fetchWeatherData ,fetchWeatherDataforlocation} from "../api"

import {createContext,useState, useContext} from "react";


const WeatherContext=createContext(null);


export const useWeather=()=>{
    return useContext(WeatherContext);
}
export const WeatherProvider =(props)=>{
    const [data,setData]=useState(null);
    const [searchcity,setSearchcity]=useState(null);


    const fetchdata=async()=>{
        const response=await fetchWeatherData(searchcity);
        setData(response);
    };

    const fetchlocationdata =async()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            fetchWeatherDataforlocation(
                position.coords.lalitude,
                position.coords.longitude
            ).then(data=>setData(data));

            // console.log(position);
        })

    }
    return (
    <WeatherContext.Provider value={{searchcity,data,
    setSearchcity,
    fetchdata,
    fetchlocationdata}}>
        {props.children}
        </WeatherContext.Provider>
    );
};