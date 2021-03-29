import React,{useState} from "react"
import ThemeContext from "./Context/ThemeContext"
import Header from "./Components/Header"
import HeroSection from "./Components/HeroSection"


const App= ()=> {

const themeHooks =  useState("light");

return (
   <ThemeContext.Provider value ={themeHooks}>
     <div>
       <Header/>
       <HeroSection/>
     </div>
   </ThemeContext.Provider>
  );
}

export default App;
