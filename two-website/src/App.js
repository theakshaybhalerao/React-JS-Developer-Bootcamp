import React from "react"
import Navbar from "./Navbar"
import CardSec from "./CardSection"

import Jumbotron from "./Jumbotron"
import Fea from "./Features"
import Foo from "./Foo"

const App = () =>{
    return (
        <div>
           <Navbar/>
           <Jumbotron/>
           <Fea/>   
           <CardSec/>
           <Foo />
        </div>
    );
    
};
export default App;
