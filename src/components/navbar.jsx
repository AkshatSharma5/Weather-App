import sun from "../assets/sun.png"
import live from "../assets/live.png"
function Navbar(){
    const datee = new Date(); 
    return(
        <>  
            <div className="h-[12vh] w-[100vw] font-poppins flex items-center bg-gradient-to-r from-prim via-blue-500 to-sky-300 brightness-105">
                <img src={sun} alt="sun-fav" className="h-[8vh] custom-spin ml-2 mr-1 my-1"/>
                <h1 className="text-3xl font-mainn text-white font-bold ml-[1.5vw] mr-[1.5vw]">Weather App</h1>
                <img src={live} alt="live-fav" className="h-[8vh] animate-pulse mr-[4vh]"/>
                <div className="bg-gradient-to-r from-green-100 via-blue-300 to-purple-300 opacity-75  drop-shadow-md text-black font-bold p-2 rounded-xl shadow-md font-mainn">Live Weather Broadcast in your pocket!</div>
                <div className="font-mainn bg-sky-600 rounded-lg  px-3 py-1 mr-[1vw] drop-shadow-2xl shadow-black center text-white text-md ml-[27vw] hover:shadow-md hover:bg-sky-700 transition-all">Created by Akshat Sharma with React and ❤️</div>
            </div>
        </>
    )
}

export default Navbar;
// import sun from "../assets/sun.png"
// import live from "../assets/live.png"
// function Navbar(){
//     const datee = new Date(); 
//     return(
//         <>  
//             <div className="h-[12vh] w-[100vw] font-poppins flex items-center bg-gradient-to-r from-prim via-blue-500 to-sky-300 brightness-105">
//                 <img src={sun} alt="sun-fav" className="h-[8vh] custom-spin ml-2 mr-1 my-1"/>
//                 <h1 className="text-3xl font-mainn text-white font-bold ml-[1.5vw] mr-[1.5vw]">Weather App</h1>
//                 <img src={live} alt="live-fav" className="h-[8vh] animate-pulse mr-[4vh]"/>
//                 <div className="bg-gradient-to-r from-green-100 via-blue-300 to-purple-300 opacity-75  drop-shadow-md text-black font-bold p-2 rounded-xl shadow-md font-mainn">Live Weather Broadcast in your pocket!</div>
//                 <div className="font-mainn bg-sky-600 rounded-lg  px-3 py-1 mr-[1vw] drop-shadow-2xl shadow-black center text-white text-md ml-[27vw] hover:shadow-md hover:bg-sky-700 transition-all">Created by Akshat Sharma with React and ❤️</div>
//             </div>
//         </>
//     )
// }

// export default Navbar;
// import sun from "../assets/sun.png"
// import live from "../assets/live.png"
// function Navbar(){
//     const datee = new Date(); 
//     return(
//         <>  
//             <div className="md:h-[12vh] lg:h-[12vh] sm:h-[18vh] xs:h-[18vh] xxs:h-[18vh] w-[100vw] font-poppins flex-wrap flex items-center justify-center bg-gradient-to-r from-prim via-blue-500 to-sky-300 brightness-105">
//                 <img src={sun} alt="sun-fav" className="h-[8vh] custom-spin ml-2 mr-1 my-1"/>
//                 <h1 className=" font-mainn text-white font-bold ml-[1.5vw] mr-[1.5vw] sm:text-base xs:text-base md:text-3xl lg:text-3xl">Weather App</h1>
//                 <img src={live} alt="live-fav" className="h-[8vh] animate-pulse mr-[4vh] xs:invisible sm:invisible md:visible"/>
//                 <div className="bg-gradient-to-r from-green-100 via-blue-300 to-purple-300 opacity-75  drop-shadow-md text-black font-bold  rounded-xl shadow-md font-mainn sm:text-xs xs:text-xs md:text-lg mx-4 px-5 py-5">Live Weather Broadcast!</div>
//                 <div className="font-mainn bg-sky-600 rounded-lg  px-3 py-1 mr-[1vw] drop-shadow-2xl shadow-black center text-white text-md ml-[27vw] hover:shadow-md hover:bg-sky-700 transition-all sm:ml-[15vw] md:ml-[27vw]  xs:hidden md:block lg:block">Created by Akshat Sharma with React and ❤️</div>
//             </div>
//         </>
//     )
// }

// export default Navbar;