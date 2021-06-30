import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { FormGroup, Label, Input, Button } from 'reactstrap';
import {loginsuccess, loginfail} from '../reducer/listReducer'
import axios from "redaxios";
import './login.css'


const LoginScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.list.isAuthenticated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    useEffect(() => {
        if (isAuthenticated) {
            history.push("/");
        }
    });

    async function click(){
        try {
          let response = await axios.post('http://localhost:8000/login', {
              email: email,
              password: password
          })
          console.log(response.data)
          if (response.data == null) {
            dispatch(loginfail('No Response'))
          } else if (!response.data.token){
            dispatch(loginfail('No Token'))
          } else {
            localStorage.setItem("token", response.data.token);
            dispatch(loginsuccess());
          }
        } catch (error) {
          dispatch(loginfail(error));
        }
      }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    return (
        <div className='loginContainer'>
        <FormGroup className='loginform'>
        <Label className='loginlabel'>Email</Label>
        <Input
           type="email"
           name="search"
           placeholder="email"
           onChange={onEmailChange}
           className='logininput'
        />
        <Label className='loginlabel'>Password</Label>
        <Input
           type="password"
           name="search"
           placeholder="password"
           onChange={onPasswordChange}
           className='logininput'
        />
        <div class="d-grid gap-2">
        <Button color="success" type="submit" onClick={click} >Login</Button>
        </div>
        </FormGroup>
        </div>
    )

};

export default LoginScreen;