import React, { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

function App() {

  useEffect(()=>{
    
  },[]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link to="/">mtokbbs</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">메인</Link></Nav.Link>
              <Nav.Link><Link to="/board">게시판</Link></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link><Link to="/login">로그인</Link></Nav.Link>
              {/* <NavDropdown title="마이페이지" id="basic-nav-dropdown">
                  <NavDropdown.Item>개인정보수정</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>로그아웃</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>

        <Route exact path="/">
          <div className="container mt-3">
            <h1 className="text-center">react x nodejs</h1>
            <button className="btn btn-danger"><Link to="/login">로그인</Link></button>
          </div>
        </Route>

        <Route path="/login">
          <Login />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
