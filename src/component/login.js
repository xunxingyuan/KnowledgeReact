import React from 'react';
import '../styles/login.less'
import api from '../api/api'

import { message, Button } from 'antd';

class Login extends React.Component{
	constructor(){
		super();
		this.state={
			loginData:{
				name: '',
				password: ''
			}
		}
	}
	changeInput = (event) =>{
		let loginData = this.state.loginData
		loginData[event.target.name] = event.target.value
		this.setState({
			loginData: loginData
		})
	}
	submit = ()=>{
		api.user.login({
			phone: this.state.loginData.name,
			password: this.state.loginData.password
		}).then((res)=>{
			if(res.data.code === 200){
				message.success('登录成功！');
				this.props.history.push("/info");
			}else {
				message.error(res.data.msg)
			}
		})
	}
	render(){
		return (
			<div className={'loginBox'}>
				<div className={'loginContain'}>
					<span className={'flex logo'}>U Konw</span>
					<div className={'Box'}>
						<div className={'item flex'}>
							<span className={'content'}>用户名：</span>
							<input className={'value'} onChange={this.changeInput} name={'name'}/>
						</div>
						<div className={'item flex'}>
							<span className={'content'}>密码：</span>
							<input  className={'value'} type={'password'} onChange={this.changeInput} name={'password'}/>
						</div>
					</div>
					<Button className='loginBtn' type='primary' onClick={this.submit}>登录</Button>
				</div>
			</div>
			)
	}
}

export default Login;