// import React, { useState, useEffect } from "react";
// import { hasFlag } from 'country-flag-icons'
// import Country from "./countryFlag"

// const Weather = ({ city,isDayHandle }) => {

//   const [weatherData, setWeatherData] = useState(null);
//   const meas = [
//     { label: "Real Feel", value: "feelslike_c", unit: "°C" },
//     { label: "Weather", value: "text", unit: "icon" },
//     { label: "Humidity", value: "humidity", unit: "%" },
//     { label: "Wind Speed", value: "wind_kph", unit: "kph" },
//     { label: "Pressure", value: "pressure_mb", unit: "mBar" },
//   ];

  

//   useEffect(() => {
//     const fetchWeather = async () => {
//       const apiKey = "40f03e2e9a2541c6981214138242003";
//       const apiUrl = `https://api.weatherapi.com/v1/current.json?key=40f03e2e9a2541c6981214138242003&q=${city}&aqi=no`;

//       try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         setWeatherData(data);
//       } catch (error) {
//         console.error("Error fetching weather => ", error);
//       }
//     };
//     fetchWeather();
//   }, [city]);

  

//   // Render weather data only if it's available -- imp.
//   if (!weatherData) {
//     return (
//       <div
//         class="absolute top-1/3 left-1/2 h-20 w-20 animate-spin rounded-full border-4 border-solid border-sky-300 border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
//         role="status"
//       >
//         <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] text-4xl font-official uppercase text-white font-bold">
//           Loading...
//         </span>
//       </div>
//     );
//   }

//   const myDayHandle = (weatherData) => {
//     isDayHandle(weatherData.current.is_day);
//   }

//   myDayHandle(weatherData);
//   const filteredCountries = Country.filter(item => item.name === weatherData.location.country);

  
//   const cold = "from-green-600 to-blue-600";
//   const hot = "from-pink-600 to-yellow-600";
//   return (
//     <div className="grid grid-cols-2 grid-rows-3  font-secon ml-[32vw] mt-11 mr-4">
//       {meas.map((item, i) => (
//         <div
//           className={`text-white uppercase cursor-pointer p-2.5 bg-gradient-to-tr ${
//             i === 0
//               ? weatherData.current[item.value] >= 22
//                 ? `${`${hot} hover:from-green-500 hover:to-blue-500`}`
//                 : cold
//               : ""
//           } hover:from-pink-600 hover:to-yellow-600 bg-darken border-2 m-2 rounded-lg mt-5 py-4 text-4xl ${
//             i === 0 ? "col-span-2" : ""
//           } `}
//         >
//           <span
//             className={`${
//               i == 0
//                 ? "visible absolute top-[10vh] left-[75vw] text-base font-mainn font-bold"
//                 : "hidden"
//             }`}
//           >
//             <span>
//               {weatherData.current[item.value] >= 22 ? "HOT" : "COLD"}
//             </span>
//           </span>
//           {item.label}
//           <div
//             className={` font-secon font-thin ${
//               i == 1 ? `${(weatherData.current.condition.text.length<=8)?"text-4xl":"text-xl"}` : "text-5xl"
//             }`}
//           >
//             {i != 1
//               ? weatherData.current[item.value]
//               : weatherData.current.condition.text}{" "}
//             <span className="text-xl ">{i != 1 ? item.unit : ""}</span>
//             <span className={`${i == 1 ? "visible" : "hidden"}`}>
//               <img
//                 src={weatherData.current.condition.icon}
//                 height={50}
//                 width={50}
//                 className="absolute top-[32.5vh] left[11.5vw] z-10 "
//               />
              
              
//             </span>
//           </div>
//         </div>
//       ))}
      
        
//       <div className="text-white w-[21vw] rounded-xl py-5  bg-darken font-official font-bold text-xl absolute top-[40vh] left-[3.2vw]">
//         <span className="font-normal uppercase underline font-secon">
//           Location:
//         </span>{" "}
//         <br /> {weatherData.location.region}, {weatherData.location.country}
//         <br />
//         <br />
//         <span className="font-normal uppercase underline font-secon">
//           Last Updated:
//         </span>{" "}
//         <br />{" "}
//         <span className="font-secon font-light text-xl">
//           {weatherData.current.last_updated}
//         </span>
//         <img className="absolute top-[3.8vh] left-[15vw] " src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${filteredCountries[0].code}.svg`} width="23" alt='Image 404'/>
//       </div>
      
//     </div>
//   );
// };

// export default Weather;







import React, { useState, useEffect } from "react";
import { hasFlag } from 'country-flag-icons'
import Country from "./countryFlag"

const Weather = ({ city,isDayHandle }) => {

  const [weatherData, setWeatherData] = useState(null);
  const meas = [
    { label: "Real Feel", value: "feelslike_c", unit: "°C" },
    { label: "Weather", value: "text", unit: "icon" },
    { label: "Humidity", value: "humidity", unit: "%" },
    { label: "Wind Speed", value: "wind_kph", unit: "kph" },
    { label: "Pressure", value: "pressure_mb", unit: "mBar" },
  ];

  
  const [status,setStatus] = useState("200");
  const url = `https://api.weatherapi.com/v1/current.json?key=40f03e2e9a2541c6981214138242003&q=${city}&aqi=no`;

fetch(url)
  .then(response => {
    setStatus(response.status);
  })



  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = "40f03e2e9a2541c6981214138242003";
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=40f03e2e9a2541c6981214138242003&q=${city}&aqi=no`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather => ", error);
      }
    };
    fetchWeather();
  }, [city]);

  if(status==400){
    return (
      <div
        className="absolute font-secon text-red-600 bg-white animate-bounce px-10 py-6 font-bold text-3xl top-1/3 left-[50%] bg-opacity-75 rounded-full"
      >
        Error 404! <br/> Please Enter correct Name!
      </div>
    );
  }
  
  // Render weather data only if it's available -- imp.
  if (!weatherData) {
    return (
      <div
        className="absolute top-1/3 left-1/2 h-20 w-20 animate-spin rounded-full border-4 border-solid border-sky-300 border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] text-4xl font-official uppercase text-white font-bold">
          Loading...
        </span>
      </div>
    );
  }

  const myDayHandle = (weatherData) => {
    if(weatherData?.current?.is_day!=undefined) isDayHandle(weatherData?.current?.is_day);
  }

  myDayHandle(weatherData);
  let codee=null;
  let country_name=weatherData?.location?.country;
  
  for(let i=0;i<Country.length;i++){
      if(Country[i].name===country_name) {codee=Country[i].code;break;}
  }
  if(country_name==="Russia") codee="RU";
  if(country_name==="United States of America") codee="US";
  
  const cold = "from-green-600 to-blue-600";
  const hot = "from-pink-600 to-yellow-600";
  return (
    /*
    md:grid-cols-1 md:grid-rows-5 xs:grid-cols-2 xs:grid-rows-5 sm:grid-cols-1 sm:grid-rows-5 lg:grid-cols-2 lg:grid-rows-3 xxs:grid-rows-5 xxs:grid-cols-1 xs:text-base sm:text-xs xxs:text-xs md:text-xl
    */ 
    <div className="grid xs:grid-cols-2 grid-rows-3 grid-cols-1 font-secon ml-[32vw] mt-11 mr-4 ">
      {meas.map((item, i) => (
        <div
          key={i}
          className={`text-white uppercase cursor-pointer p-2.5 bg-gradient-to-tr
           ${i === 0? weatherData?.current[item?.value] >= 22? `${`${hot} hover:from-green-500 hover:to-blue-500`}`: cold: ""} hover:from-pink-600 hover:to-yellow-600 bg-darken border-2 m-2 rounded-lg mt-5 py-4 xl:text-4xl lg:text-3xl sm:text-2xl xs:text-xl text-lg
           ${i === 0 ? "xl:col-span-2 col-span-1" : ""} `}
        >
          <span className={`${i == 0 ? "visible absolute top-[10vh] left-[75vw] text-base font-mainn font-bold": "hidden"}`}>
            <span className="xl:inline-block hidden md:text-white lg:text-white ">
              {weatherData?.current[item?.value] >= 22 ? "HOT" : "COLD"}
            </span>
          </span>
          {item?.label}
          <div
            className={`font-secon font-thin ${i == 1 ? `${(weatherData?.current?.condition?.text?.length<=8)?"xl:text-4xl lg:text-3xl text-2xl":"text-xl"}`:"xl:text-5xl lg:text-3xl text-2xl"}`}>
            {i != 1? weatherData?.current[item?.value] : weatherData?.current?.condition?.text}{" "}
            <span className="text-xl ">{i != 1 ? item?.unit : ""}</span>
            <span className={`${i == 1 ? "visible" : "hidden"}`}>
              <img
                src={weatherData?.current?.condition?.icon}
                height={50}
                width={50}
                className="absolute hidden xl:block top-[32vh] left[11?.5vw] z-10 "
              />
              
              
            </span>
          </div>
        </div>
      ))}
      
        
      <div className="text-white w-[32vw] xs:w-[21vw] rounded-xl py-5  bg-darken font-official font-bold text-lg sm:text-xl absolute top-[40vh] left-[3.2vw] sm:px-[5vw]">
        <span className="font-normal uppercase underline font-secon">
          Location:
        </span>{" "}
        <br /> {weatherData?.location?.region}, {weatherData?.location?.country}
        <br />
        <br />
        <span className="font-normal uppercase underline font-secon">
          Last Updated:
        </span>{" "}
        <br />{" "}
        <span className="font-secon font-light text-lg sm:text-xl">
          {weatherData?.current?.last_updated}
        </span>
        {(codee)!=null?<img className="absolute xl:top-[3.8vh] xl:left-[15vw] left-[17vw] top-[3.5vh] lg:inline-block hidden" src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${codee}.svg`} width="23" alt='Image 404'/>:''}
      </div>
      
    </div>
  );
};

export default Weather;
