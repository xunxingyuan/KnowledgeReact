import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
	return (
		<div className={'header'}>
			<p className={'logo'}>U Know</p>
			<div className={'nav'}>
				<span><Link to="/">首页</Link></span>
				<span><Link to="/login">登录</Link></span>
				<span>关于</span>
			</div>
		</div>
	)
}

export default Header;