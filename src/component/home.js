import React from 'react';
import api from '../api/api'

class Home extends React.Component {
    constructor(){
        super()
        this.state={
            lists: []
        }
    }
	componentWillMount(){
        api.public.query().then((res) => {
            if(res.data.code === 200){
                this.setState({
                    lists : res.data.data.lists
                })
            }
        }).catch((err) => {
            
        });
    }
    render() {
        let listShow = this.state.lists.map((listItem)=>(
            <div>{listItem.preview}</div>
        ))

        return (
            <div className='home'>
                {listShow}
            </div>
        )

    }
}

export default Home;