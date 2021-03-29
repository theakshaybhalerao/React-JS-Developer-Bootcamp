import React from 'react'
import PropTypes from 'prop-types'
import "./App.css"
import Button from "./Button"
import {useLocation} from "react-router-dom"

const Header = ({title, onAdd, showAdd}) => {

    const onClick=()=>{
        console.log("CLICK")
    }
    
const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>

           {location.pathname === "/" && (<Button onClick ={onAdd} text ={showAdd?"CLOSE":"ADD"} color ={showAdd?"RED":"GREEN"}/>)}
          
        </header>
    )    
}
Header.defaultProps = {
    title:"Task Tracker"
}

Header.protoTypes ={
    title:PropTypes.string.isRequired,
}

Button.defaultProps={

    color:"steel blue",

}
Button.protoTypes={
    text: PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
    onClick:PropTypes.func,
}
// const headingStyle ={

//     color:'red',
//     backgroundColor: "black",
// }

export default Header
