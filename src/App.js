import React from 'react';
import Main from './router/main'
import Header from './component/common/header'
import './styles/index.less'
import 'antd/dist/antd.less'

const App = () => (
	<div className={'app'}>
		<Header/>
		<Main/>
	</div>
)

export default App;
