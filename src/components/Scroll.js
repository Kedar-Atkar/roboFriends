import React from 'react';

const Scroll = (props)=>{
	return(
		<div style={{overflow:'scroll',border:'2px solid black',height: '1000px', margin:'10px 0 0 0'}}>	
			{props.children}
		</div>
		)
}
export default Scroll;