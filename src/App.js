import React,{useState} from "react"
import './App.css';
import Icon from "./components/Icons"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const itemArray = new Array(9).fill("empty");
const  App = () => {
  const [isCross,setIsCross] = useState(false);
  const [winMessage,setWinMessage] = useState("");

  const reloadGame = () =>{
    
  }
  const checkIsWinner  =() =>{

  }
  const changeItem = itemNumer =>{

  }
   return (
     <div>

<Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
     </div>
  
  );
}

export default App;
