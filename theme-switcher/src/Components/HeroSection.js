import React, {useContext} from "react"
import ThemeContext from "../Context/ThemeContext"

import AppTheme from "../Colors"
import ThemeToggler from "./ThemeToggler"


const HeroSection = ()=>
{


    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]
    return (

        <div
        style={{padding: "1rem", backgroundColor: `${currentTheme.backgroundColor}`,color:`${currentTheme.textColor}`, textAlign: "center"}} >

            <h1>Context API Theme Toggler</h1>
            <p>Such a nice Paragraph</p>
            <button style ={{backgroundColor:"#26ae60", padding: "10px 150px", fontSize: "20px", Color:"#FFF",border:`${currentTheme.border}`}}
             value ="CLICK ME">{<ThemeToggler/>} </button>
        </div>

    );
};

export default HeroSection;
