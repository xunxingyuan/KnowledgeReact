import React from 'react';
import '../styles/login.less'
import api from '../api/api'
import { Button } from 'antd';


const Login = () => {
	let loginData={
		name: '',
		password: ''
	}
	const changeInput = (event) =>{
		loginData[event.target.name] = event.target.value
	}
	const submit = ()=>{
		api.user.login({
			phone: loginData.name,
			password: loginData.password
		}).then((res)=>{
			console.log(res)
		})
	}

	return (
		<div className={'loginBox'}>
			<div className={'loginContain'}>
				<span className={'flex logo'}>U Konw</span>
				<div className={'Box'}>
					<div className={'item flex'}>
						<span className={'content'}>用户名：</span>
						<input className={'value'} onChange={changeInput} name={'name'}/>
					</div>
					<div className={'item flex'}>
						<span className={'content'}>密码：</span>
						<input  className={'value'} type={'password'} onChange={changeInput} name={'password'}/>
					</div>
				</div>
				<Button className='loginBtn' type='primary' onClick={submit}>登录</Button>
			</div>
		</div>
	)
}

export default Login;