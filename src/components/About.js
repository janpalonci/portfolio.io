import React from 'react';
import { Tab } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';


const About = () => {
  return ( 
  	<div className='container col-md-6 col-md-offset-3'>
  		<div className='row'>
			<Tab.Container defaultActiveKey="#link1">
			  <Row>
			    <Col xl="7" >
			      <ListGroup>
			        <ListGroup.Item action href="#link1">
			          About Jan
			        </ListGroup.Item>
			        <ListGroup.Item action href="#link2">
			          Link 2
			        </ListGroup.Item>
			      </ListGroup>
			    </Col>
			    <Col>
			      <Tab.Content>
			        <Tab.Pane eventKey="#link1">
			          Hello! I am a freelance developer. Lorem ipsum kjsfkj hajkdfhak
			          jhfdkjahfjk jkhkjhdd akhdk jadkjhkwqd kjahd 
			          akfjkanjkcnkjehfuwehf kjahfkhfd ahdkjhfkjw jakhfkf 
			        </Tab.Pane>
			        <Tab.Pane eventKey="#link2">
			          Link2 wefkjwh
			        </Tab.Pane>
			      </Tab.Content>
			    </Col>
			  </Row>
			</Tab.Container>
		</div>	
  </div>
  );
}


export default About;