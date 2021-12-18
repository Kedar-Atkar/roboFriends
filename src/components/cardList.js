import React from 'react';
import Card from './card';

const CardList = ({robots})=>{	
	return(
		<div>
			{
				robots.map((user, i)=>{
		return (
			<Card 
			key={robots[i].id} 
			id={robots[i].id} 
			email={robots[i].email} 
			name={robots[i].name}/>
			);
	})
			}
		</div>
		);
}

export default CardList;