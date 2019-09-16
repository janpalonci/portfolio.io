import React from 'react';
import { Nav } from 'react-bootstrap';
import '.././App.css';

const Navigation = () => {
  return ( 
  	<div className='clearfix'>
  		<h3 className='float-left pageTitle'>Jan Palonci</h3>
	  	<Nav className="float-right"  activeKey="/home">
		    <Nav.Item>
		      <Nav.Link href="/home">Home</Nav.Link>
		    </Nav.Item>
		    <Nav.Item>
		      <Nav.Link eventKey="link-1">About</Nav.Link>
		    </Nav.Item>
		    <Nav.Item>
		      <Nav.Link eventKey="link-2">Projects</Nav.Link>
		    </Nav.Item>
		    <Nav.Item>
		      <Nav.Link eventKey="link-3">Contact</Nav.Link>
		    </Nav.Item>
	  </Nav>
  </div>
  );
}




console.log('nav is working');

export default Navigation;