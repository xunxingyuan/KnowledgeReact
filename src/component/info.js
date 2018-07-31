import React from 'react';

// const Info = (props) => {
// 	let MenuData = []
// 	let selectMenu = 'userInfo'
// 	let menu = [{
// 		url: 'userInfo',
// 		name: '用户信息'
// 	},{
// 		url: 'userMsg',
// 		name: '我的消息'
// 	},{
// 		url: 'userFollow',
// 		name: '我的关注'
// 	},{
// 		url: 'userPublish',
// 		name: '我的发布'
// 	},{
// 		url: 'userMoney',
// 		name: '我的钱包'
// 	}]
// 	initMenu()
// 	function initMenu() {
// 		MenuData = []
// 		menu.forEach((ele)=>{
// 			MenuData.push(
// 				<span onClick={()=> choseMenu(ele)} className={ele.url===selectMenu?'active':'unActive'}>
// 				{ele.name}
// 			</span>
// 			)
// 		})
// 	}
// 	function choseMenu(item){
// 		console.log(item)
// 		selectMenu = item.url
// 		initMenu()
// 	}
// 	return (
// 		<div className={'InfoBox'}>
// 			<section className={'menuList'}>
// 				{MenuData}
// 			</section>
// 			<section className='content'>
//
// 			</section>
// 		</div>
// 	)
// }
class Menu extends React.Component {
	render () {
		const { menu } = this.props
		return (
			<span>
				{menu.name}
			</span>
		)
	}
}


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
	render() {
		return (
			<div className={'InfoBox'}>
				<section className={'menuList'}>
					{this.state.menu.map( (menu) => <span className={(this.state.selectMenu === menu.url)?'active':'unActive'}>{menu.name}</span>)}
				</section>
				<section className='content'>

				</section>
			</div>
		)
	}
}

export default Info;