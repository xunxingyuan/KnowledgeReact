import React from 'react';
import api from '../api/api'
import '../styles/home.less'

class Home extends React.Component {
    constructor(){
        super()
        this.state={
            lists: [],
            typeList:[{
                name:'最新',
                type:'new'
            },{
                name:'我关注的',
                type:'follow'
            },{
                name:'热门',
                type:'hot'
            }]
        }
    }
    render() {
        let listShow = this.state.lists.map((listItem,index)=>(
            <div key={index}>{listItem.preview}</div>
        ))
        let typeMenu = this.state.typeList.map((menu,index)=>(
            <div className='type' key={index}>{menu.name}</div>
        ))

        return (
            <div className='home'>
                <div className='left'>{listShow}</div>
                <div className='right'>{typeMenu}</div>
            </div>
        )

    }
    componentDidMount(){
        api.public.query().then((res) => {
            if(res.data.code === 200){
                this.setState({
                    lists : res.data.data.lists
                })
            }
        }).catch((err) => {
            
        });
    }
}

export default Home;