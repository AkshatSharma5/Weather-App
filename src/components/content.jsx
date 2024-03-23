import hero from "../assets/hero.webp";
import day from "../assets/dayy.gif";
import night from "../assets/nighttt.gif"
import { useRef, useState } from "react";
import Weather from "./weather";
function Content(){
    const [city,setCity] = useState('Mathura');
    const [isDay,setIsDay] = useState(1);

    
    const handleOnClick = () => {
        setCity(document.getElementById('cityInput').value);
        // alert(document.getElementById('cityInput').value);
    }
    const isDayHandle=(dayvalue)=>{
        setIsDay(dayvalue===1);
    }

    return(
        <>
        <div className="flex items-center justify-center w-[100vw] h-[88vh] bg-cover bg-center brightness-55 " style={{backgroundImage: `${(isDay==1)?`url(${day})`:`url(${night})`}`}}>
            <div className={` w-[80vw] h-[80vh] hue-rotate-15 bg-transparent backdrop-blur-lg border border-white shadow-2xl ${isDay==1?"shadow-white":"shadow-sky-600"} rounded-xl font-official text-center`}>
                <div className="flex flex-col justify-center items-center">

                    <input type="text" id='cityInput' placeholder="Enter city" defaultValue='Mathura'  className="outline-none p-3 text-3xl absolute left-[3vw] top-[15vh] bg-transparent border border-white rounded-md text-white placeholder-zinc-50"/> 

                    <button type="submit" onClick={handleOnClick} className={`text-white transition absolute px-6 py-2 top-[35%] left-[5%] rounded-lg text-xl uppercase font-secon bg-gradient-to-tr from-green-400 to-sky-600 font-semithin active:from-pink-400 active:scale-105 active:translate-y-1 active:translate-x-1 active:to-yellow-600 `} >See Now</button>
                </div>
                    <Weather city={city} isDayHandle={isDayHandle}/>
                    {/* <Weather/> */}
                
            </div>
        </div>
        </>
    )
}
export default Content;