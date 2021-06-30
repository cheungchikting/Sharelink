import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { Button, Row , Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { logout } from '../reducer/listReducer'

import "./navbar.css"

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.list.isAuthenticated);

  async function click (){
    await localStorage.clear("token");
    await dispatch(logout())
    return <Redirect to="/"/>
  }

  return (
    <div className='container-fluid navcontainer'>
      <Row className='navbar navbar-expand-lg'>
        <Col sm="6" md="10">
        <div className='navleft'>
        <h1 className='navbar-brand'>ShareLink</h1>
        <div className='nav-item'>
        { (!isAuthenticated) ? <div></div> : <Link className="nav-link" to='/'>Browse Links</Link>}
        </div>
        <div className='nav-item'>
        { (!isAuthenticated) ? <div></div> : <Link className="nav-link" to="/add">Add Link</Link>}
        </div>
        </div>
        </Col>
        <Col sm="6" md="2">
        { (!isAuthenticated) ? <div></div>:<Button onClick={click} >Logout</Button>}
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;