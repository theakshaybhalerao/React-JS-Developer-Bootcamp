import React, {Fragment} from "react"
import Provider from "./Provider"
import Context from "./Context"


const Agents = () =>{

    return(

         <AgentOne/>

    );
}
const AgentOne = () =>{

    return(

         <AgentTwo/>

    );
}

const AgentTwo = () =>{

    return(

         <AgentBond/>

    );
}
const AgentBond = () =>{

    return(

        <Context.Consumer>
            {
                (context)=>(
                    <Fragment>
                        <h3>Mission Information</h3>
                        <p>Mission Name: {context.data.mName}</p>
                        <h2>Mission Status: {context.data.accept}</h2>
                        <button onClick={context.isMissionAccepted}>Choose to Accept</button>
                        <button onClick={context.isMissionDeclined}>Choose to Decline</button>
                    </Fragment>
                )
            }
        </Context.Consumer>  

    );
}




const App = () =>
{

    return(

        <div>
            <h1>Context API</h1>
            <Provider>
                <Agents />
            </Provider>
        </div>

    );

};


export default App;
