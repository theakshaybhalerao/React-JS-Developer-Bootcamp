import React, { useState } from "react";
import logo from "./logo.svg";

import Icon from "./components/icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { FaCentercode } from "react-icons/fa";
const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    // Reloading /  Resetting State
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty",0,9)

  };

  const checkIsWinner = () => {
    //
    if(itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !="empty"
      ){

        setWinMessage(`${itemArray[0]} wins`);

      }else if(itemArray[3] === itemArray[4] &&
                itemArray[3]=== itemArray[5]&&
                itemArray[3]!="empty"){
                  setWinMessage(`${itemArray[3]} wins`);
       }else if(itemArray[6] === itemArray[7] && itemArray[6]=== itemArray[8] && itemArray[6]!="empty")
       {
          setWinMessage(`${itemArray[6]} wins`);
       }else if(itemArray[0] === itemArray[3] && itemArray[0]=== itemArray[6] && itemArray[0]!="empty")
       {
          setWinMessage(`${itemArray[0]} wins`);
       }else if(itemArray[1] === itemArray[4] && itemArray[1]=== itemArray[7] && itemArray[1]!="empty")
       {
          setWinMessage(`${itemArray[1]} wins`);
       }else if(itemArray[2] === itemArray[5] && itemArray[2]=== itemArray[8] && itemArray[2]!="empty")
       {
          setWinMessage(`${itemArray[2]} wins`);
       }else if(itemArray[0] === itemArray[4] && itemArray[0]=== itemArray[8] && itemArray[0]!="empty")
       {
          setWinMessage(`${itemArray[0]} wins`);
       }else if(itemArray[6] === itemArray[4] && itemArray[6]=== itemArray[2] && itemArray[6]!="empty")
       {
          setWinMessage(`${itemArray[6]} wins`);
       }
       
       


  };

  const changeItem = itemNumber => {
    //
    if(winMessage){
      return toast.success(winMessage);
    }


    if(itemArray[itemNumber] ==="empty"){

      itemArray[itemNumber] = isCross? "cross" :"circle";
      setIsCross(!isCross);

    }else
    {
      return toast.error("Already Filled");
    }

    checkIsWinner();
     };

  return (
    <div>
    <div>
    <h1 className="mt-2 mb-2 text-nowrap text-center text-warning">TIC TAC TOE</h1>
    </div>
    <Container className="p-5">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false}
       newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Row>
        <Col md={6} className="offset-md-3">
          { winMessage? (
            <div className = "mb-2 mt-2">
              <h1 className ="text-success text-uppercase text-center">
                {winMessage}
              </h1>
           
            </div>
          ) : (
            <h1 className = "text-center text-warning">
              { isCross ? "Cross" :  "Circle"} Turns

            </h1>
          
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card className = "card" color = "warning" onClick={ ()=> changeItem(index)  }>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
          <div className = "mb-2 mt-2">
              
            <Button color = "success" block onClick = {reloadGame}>
            Reload the Game!
            </Button>
            </div>
        </Col>
      </Row>
      
    </Container>
    </div>
  );
};

export default App;
