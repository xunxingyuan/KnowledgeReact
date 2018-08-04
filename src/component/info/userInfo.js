import React from 'react';
import api from '../../api/api'

class userInfo extends React.Component {
	constructor() {
		super()
		this.state = {
			userInfo: ''
		}
	}
	componentWillMount() {
		api.user.getUser().then((res) => {
			console.log(res)
			if(res.data.code === 200){
				this.setState({
					userInfo: res.data.data
				})
			}
		})
	}
	render() {
		return (
			<div className='userInfo'>
				<div>{this.state.userInfo.name}</div>
				<div>{this.state.userInfo.email}</div>
			</div>
			
		)
	}
}

export default userInfo;