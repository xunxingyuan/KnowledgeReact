import React from 'react';
import UserInfo from './info/userInfo'
import UserFollow from './info/userFollow'
import UserMessage from './info/userMessage'
import UserPublish from './info/userPublish'
import UserMoney from './info/userMoney'



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
		let menu = (this.state.menu.map( (menu,index) => <span className={(this.state.selectMenu === menu.url)?'active':'unActive'} onClick={this.setMenu.bind(menu,menu.url)} key={index}>{menu.name}</span>))
		let showItem
		switch (this.state.selectMenu){
			case 'userInfo':
				showItem = <UserInfo name="userinfo" />
				break;
			case 'userMsg':
				showItem = <UserMessage name="usermsg" />
				break;
			case 'userFollow':
				showItem = <UserFollow name="userfollow" />
				break;
			case 'userPublish':
				showItem = <UserPublish name="userpublish" />
				break;
			case 'userMoney':
				showItem = <UserMoney name="usermoney" />
				break;
			default:
				showItem = <UserInfo name="userinfo" />
				break;
		}
		return (
			<div className={'infoBox flex'}>
				<section className={'menuList'}>
					{menu}
				</section>
				<section className='content'>
					{showItem}
				</section>
			</div>
		)
	}
}

export default Info;