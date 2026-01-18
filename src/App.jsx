import { useState } from 'react'
import  Card from './component/Card'
import  Input  from './component/Input'
import Button  from './component/Button'
import './App.css'
import {useWeather} from "./context/Weather";


function App() {
 const weather=useWeather();
 console.log(weather);

  return (
    <>
    <div className="App">
      <h1>Weather Updates</h1>
      <Input/>
      <Button  onClick={weather.fetchdata}value="Search"/>
      <Card/>
      <Button value ="Refresh"/>
    </div>
      
    </>
  )
}

export default App;
