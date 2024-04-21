import { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function Navbars({ setCategory }) {
  const technology = () => {
    setCategory("technology")
  }
 
  
    return (
      <Navbar  collapseOnSelect expand="lg" style={{ margin: "1.5rem", backgroundColor: "rgba(128, 0, 128, 0.5)",marginTop:'10px'}} bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand > <span className='badge bg-primary text-white fs-3'>𝕭𝖑𝖔𝖌𝕾𝖍𝖆𝖗𝖊  <span className='badge bg-danger'>NeWs</span></span> </Navbar.Brand>


          <Navbar.Toggle aria-controls="responsive-navbar-nav " className='bg-primary' />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto text-center ">
              <Nav.Link onClick={technology}   ><span className='badge bg-info fs-4' style={{ fontFamily: 'cursive' }}>Technologies</span> </Nav.Link>
              <Nav.Link onClick={() => { setCategory("business") }} ><span className='badge bg-primary fs-4' style={{ fontFamily: 'cursive' }}>Business</span> </Nav.Link>
              <Nav.Link onClick={() => { setCategory("entertainment") }} ><span className='badge bg-success fs-4' style={{ fontFamily: 'cursive' }}>Entertainment</span></Nav.Link>
              <Nav.Link onClick={() => { setCategory("general") }} ><span  className="bg-warning badge fs-4"style={{ fontFamily: 'cursive' }}>General</span></Nav.Link>
              <Nav.Link onClick={() => { setCategory("health") }} ><span className='badge bg-danger fs-4' style={{ fontFamily: 'cursive' }}>Health</span></Nav.Link>
              <Nav.Link onClick={() => { setCategory("science") }} ><span className='badge bg-dark fs-4' style={{ fontFamily: 'cursive' }}>Science</span></Nav.Link>
              <Nav.Link onClick={() => { setCategory("sports") }} ><span  className='badge bg-info fs-4'style={{ fontFamily: 'cursive' }}>Sports</span></Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  
  }

  export default Navbars;