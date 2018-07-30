import React from 'react';

const Info = (props) => {
	const MenuData = []
	let menu = [{
		url: 'userInfo',
		name: '用户信息'
	},{
		url: 'userInfo',
		name: '我的消息'
	},{
		url: 'userInfo',
		name: '我的关注'
	},{
		url: 'userInfo',
		name: '我的发布'
	},{
		url: 'userInfo',
		name: '我的钱包'
	}]
	menu.forEach((e)=>{
		MenuData.push(
			<span onClick={choseMenu(e)}>
				{e.name}
			</span>
		)
	})
	function choseMenu(item){

	}
	return (
		<div className={'InfoBox'}>
			<section className={'menuList'}>
				{MenuData}
			</section>
			<section className='content'>

			</section>
		</div>
	)
}

export default Info;