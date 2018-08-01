import React from 'react';
import "../styles/info.less";

class Info extends React.Component{
	constructor() {
		super();
		this.state = {
			selectMenu: 'userInfo',
			menu: [{
				url: 'userInfo',
				name: '用户信息'
			},{
				url: 'userMsg',
				name: '我的消息'
			},{
				url: 'userFollow',
				name: '我的关注'
			},{
				url: 'userPublish',
				name: '我的发布'
			},{
				url: 'userMoney',
				name: '我的钱包'
			}]
		}
	}
	setMenu = (url) => {
		this.setState({
			selectMenu: url
		})
	}
	render() {
		return (
			<div className={'infoBox flex'}>
				<section className={'menuList'}>
					{this.state.menu.map( (menu,index) => <span className={(this.state.selectMenu === menu.url)?'active':'unActive'} onClick={this.setMenu.bind(menu,menu.url)} key={index}>{menu.name}</span>)}
				</section>
				<section className='content'>

				</section>
			</div>
		)
	}
}

export default Info;