import React, { useState } from 'react';
import { Button, FormGroup, Label, Input, Form, Container, Row, Col} from 'reactstrap';
import './addlink.css'
import Profile from './profile'
import { useDispatch } from 'react-redux'
import  {addLinkThunksuccess, addLinkThunkfailure } from '../reducer/listReducer'
import axios from "redaxios";

let token = localStorage.getItem('token')

const Addlink = () => {

  const dispatch = useDispatch()

  const [url, setURL] = useState('');
  console.log(url)

  function change (e) {
    setURL(e.target.value)
  }

  async function click (e) {
    e.preventDefault()
    try {
      let data = await axios.post('http://localhost:8000/add', {url: url}, {headers: { Authorization: `Bearer ${token}` }})
      console.log(data)
      dispatch(addLinkThunksuccess(data.data))
      setURL("")
    } catch (error) {
      dispatch(addLinkThunkfailure(error));
    }
  }

  return (
    <div>
        <Row>
        <Col  sm="12" md="3">
          <Profile name={'Lebron James'} img={'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxNjE3MTA0Mzg0OTU5NzQ2/lebron-james-lakers.jpg'}/>
        </Col>
        <Col sm="12" md="9">
        <Container fluid className="title">
         <h1 className="display-3"> Add New Link</h1>
        </Container>
        <Form id="myform" className='form'>
          <FormGroup className='formgroup'>
            <Label>Link</Label>
            <Input
              type="url"
              name="url"
              placeholder="url"
              form="myform"
              onChange={change}
              value={url}
            />
          </FormGroup>
          <Button onClick={click} color="success" type="submit">Add Link</Button>
        </Form>
        </Col>
        </Row>
    </div>
  );
}

export default Addlink; 