import React from 'react';


const Card = ({id, name, email})=>{
	return(
		<div className="tc br3 ma2 pa2 dib bg-light-blue grow">
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
		);
};

export default Card; 
