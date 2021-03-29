import { render } from "@testing-library/react";
import react from "react"

import Button from "./Button"

const App = () =>  {

    return ( 
    <div>
        <h1 style = {{ textAlign: "center" }} >Hello World!</h1>
        <Button title="APP STORE" />
        <Button title="GOOGLE PLAY STORE" />
        <Button  />
        </div>
    );


}
 
export default App;
