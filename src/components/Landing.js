import React from 'react';
import Landing1 from '../landing1.jpg'

const Landing = () => {
  return ( 
  	<div className='container'>
  		<div className='row'>
		  	<div className='landingWelcome'>
			  	<h1 className='landingWelcomeText'>
			  		Rezo Zero believes in perfection by design and performance by default
			  	</h1>
		  	</div>
		  	<div className='"'>
		  		<img className='parallaxImg' src={Landing1} alt="fireSpot"/>
		  	</div>
		</div>	
  </div>
  );
}


export default Landing;