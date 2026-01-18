const baseUrl = "https://api.weatherapi.com/v1/current.json?key=4903856dba31462db1790248250511";
export const fetchWeatherData = async (city) => {
    const response =await fetch(`${baseUrl}&q=${city}&aqi=yes`);
    return await response.json();
};

export const fetchWeatherDataforlocation = async (lat,lon) => {
    const response =await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
};



// const baseUrl = "https://api.weatherapi.com/v1/current.json?key=4903856dba31462db1790248250511";

// export const fetchWeatherData = async (city) => {
//   try {
//     const response = await fetch(`${baseUrl}&q=${encodeURIComponent(city)}&aqi=yes`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     return null;
//   }
// };

    
      