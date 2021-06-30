import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, 
} from 'reactstrap';
import { useSelector } from 'react-redux'

function Profile(props) {

  const count = useSelector((state) => state.list.count)

  return (
    <div className='cardcontainer'>
    <Card>
    <CardImg top width="100%" src={props.img} alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">{props.name}</CardTitle>
      <CardText>{count} shared links</CardText>
    </CardBody>
    </Card>
    </div>
  )

}

export default Profile;