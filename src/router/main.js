import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from "../component/home"
import Login from "../component/login"

const Main = () => (
	<Switch>
		<Route exact path='/' component={Home}/>
		<Route path='/login' component={Login}/>
	</Switch>
)

export default Main;