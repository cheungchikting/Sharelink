import React, { useEffect } from 'react';
import { Container, Table, Button, Row, Col } from 'reactstrap';
import './displayLink.css';
import Profile from './profile'
import Filter from './filter';
import { useSelector, useDispatch } from 'react-redux'
import  { getLinkThunksuccess, getLinkThunkfailure, removeLinkThunksuccess, removeLinkThunkfailure } from '../reducer/listReducer'
import axios from "redaxios";



function DisplayLink() {
  let token = localStorage.getItem('token')
  const dispatch = useDispatch()
  const url = useSelector((state) => state.list.url)
  const search = useSelector((state) => state.list.search)

  useEffect(() => {

    let token = localStorage.getItem('token')
    async function getThunk(){
      try {
        let data = await axios.get('http://localhost:8000/', { headers: { Authorization: `Bearer ${token}` } })
        dispatch(getLinkThunksuccess(data.data));
      } catch(error) {
        dispatch(getLinkThunkfailure(error));
      }
    }
    getThunk()
  },[])

  async function click(id){
      try {
      await axios.post('http://localhost:8000/remove/', {id: id}, { headers: { Authorization: `Bearer ${token}` } },
      {headers: { Authorization: `Bearer ${token}` }})
      dispatch(removeLinkThunksuccess(id));
      } catch (error) {
        dispatch(removeLinkThunkfailure(error));
      };
  }

  let filterlist = url.filter((x) => {
    return x.url.toLowerCase().includes(search.toLowerCase())
  })

    return (
      <div>
        <Row>
        <Col  sm="12" md="3">
          <Profile name={'Lebron James'} img={'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxNjE3MTA0Mzg0OTU5NzQ2/lebron-james-lakers.jpg'}/>
        </Col>
        <Col sm="12" md="9">
        <Container fluid className="title">
          <h1 className="display-3">Links for Sharing</h1>
        </Container>
        <Filter />
        <Table className='table'>
         <thead>
             <tr>
             <th>#</th>
             <th>URL</th>
             <th></th>
             </tr>
         </thead>
         <tbody>
            {filterlist.map((data, index) => {
               return (
            <tr key={data.id}>     
            <th  key={data.id} scope="row">{index + 1}</th>
            <td><a key={data.id} href={data.url}>{data.url}</a></td>
            <td><Button onClick={() => click(data.id)} color="success">Remove</Button></td>
            </tr>
              )
            })}
         </tbody>
        </Table>
        </Col>
        </Row>
      </div>
   )
}

export default DisplayLink;