import {fetchWeatherData} from "../api"

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
    return (
    <WeatherContext.Provider value={{searchcity,data,setSearchcity,fetchdata}}>
        {props.children}
        </WeatherContext.Provider>
    );
};