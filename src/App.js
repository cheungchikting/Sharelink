import './App.css';
import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import DisplayLink from './components/displayLink'
import Navbar from './components/navbar';
import AddLink from './components/addlink'
import LoginScreen from './components/login'
import PrivateRoute from './components/privateRoute';

console.log(localStorage)

function App() {
  return(
    <BrowserRouter>
    <Container className="mainContainer">
      <Navbar />
      <Switch>
        <PrivateRoute exact path='/' component={DisplayLink} />
        <PrivateRoute path='/add' component={AddLink} />
        <Route path='/login' component={LoginScreen} />
      </Switch>
    </Container>
    </BrowserRouter>
  )
}

export default App;