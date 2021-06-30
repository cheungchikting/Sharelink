import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

import { useDispatch } from 'react-redux'
import  { search} from '../reducer/listReducer'

function Filter() {

  const dispatch = useDispatch()

  return (
   <FormGroup>
    <Label for="exampleSearch">Search</Label>
    <Input
      type="text"
      name="search"
      placeholder="search"
      onChange={(e)=> dispatch(search(e.target.value))}
    />
   </FormGroup>
   )
}

export default Filter;