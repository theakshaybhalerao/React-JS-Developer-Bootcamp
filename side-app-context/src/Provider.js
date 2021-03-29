import React, {useState} from "react"
import PackageContext from "./Context"





const Provider = props => {



    const [mission,setMission] = useState({

        mName: "Go to Russia",
        mAgent: "James Bond",
        mAgentCode: "007",
        accept: "Not Accepted"

    });

    return(
           

            <PackageContext.Provider
            value ={{
                data: mission,
                isMissionAccepted: () =>{
                    setMission({...mission,accept:"ACCEPTED"})
                },
                isMissionDeclined: () =>{
                    setMission({...mission,accept:"Declined"})
                }
            }}>

                {props.children}
            </PackageContext.Provider>

    );

};

export default Provider;