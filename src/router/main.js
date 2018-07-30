import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from "../component/home"
import Login from "../component/login"
import Info from "../component/info"

const Main = () => (
	<Switch>
		<Route exact path='/' component={Home}/>
		<Route path='/login' component={Login}/>
		<Route path='/info' component={Info}/>
	</Switch>
)

export default Main;