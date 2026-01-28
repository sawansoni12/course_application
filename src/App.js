// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import { Button, Container,Row,Col } from 'reactstrap';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './components/Home';
import AllCourses from "./components/AllCourses";
import AddCourse from './components/AddCourse';
import About from './components/About';
import Menus from './components/Menus';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Contact from './components/Contact';



function App() {
  // const btnHandle =()=>{
  //   toast.success("Done",{
  //     position:"top-center",
  //   });
  // };
  return( <div>
  <Router>
    <ToastContainer/>
  <Header/>
  <Container>
    <Row>
      <Col md={4}>
      <Menus/>
      </Col>
      <Col md={8}>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add-course" element={<AddCourse/>} />
      <Route path="/view-courses" element={<AllCourses/>} />
      <Route path="/about-us" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>


      </Col>

    </Row>
  </Container>
  </Router>

    
  </div>
  );

}

export default App;
