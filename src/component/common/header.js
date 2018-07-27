import React from 'react';

const Header = () => {
	let user = window.sessionStorage.getItem('user')
	return (
		<div className={'header'}>
			<p className={'logo'}>U Know</p>
			<div>
				<span>主页</span>
				<span>登录</span>
				<span>关于</span>
			</div>
		</div>
	)
}

export default Header;