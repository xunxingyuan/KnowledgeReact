import React from 'react';

class userMessage extends React.Component{
	render(){
		return (
			<div>{this.props.name}</div>
		)
	}
}

export default userMessage;