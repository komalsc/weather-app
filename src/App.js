import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import BackgroundImage from 'react-background-image';
import './App.css';
 function App(){
  const[search,setSearch]=useState("")
  const[cities,setCity]=useState({})
  function HandleSearch(e){
    setSearch(e.target.value)
  }
  function HandleCity(){
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
    search +
    "&appid=" +
    "f56f24967aaf51182d1d4df628297c6d")
    .then(res=>res.json())
    .then(data=>setCity(data))
    
    }
  // useEffect(()=>{
  //   fetch()
  // },[])
  return (
    <div  style={{ 
      backgroundImage: `url("https://cdn.wallpapersafari.com/75/72/9Xzk65.jpg")`,
      height: '1260px' ,
      
    }}>
      {console.log(cities)}
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={HandleSearch}
            />
            <Button variant="outline-success" onClick={HandleCity}>Search</Button>
          </Form>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <ul>
      <li><h2>{cities?.name}</h2></li>
      <li style={{color:"red"}}>
      {(cities?.main?.temp - 273.15).toFixed(2)}°C
     
    </li>
    <li> {cities?.main?.humidity
}%</li>
<li>{cities?.wind?.speed}Km/h</li>
    </ul>
    </div>
  );
};
export default App;