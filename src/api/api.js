import axios from 'axios'
import Qs from 'qs'

function get(url,data) {
	return axios.get(url,{
		params: data
	})
}

function post(url,data) {
	return axios.post(url,data)
}

function postForm(url,data) {
	let reqData = Qs.stringify(data);
	return axios.post(url,reqData,{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
}

function deleteMethod(url,data) {
	return axios.delete(url,{
		params: data
	})
}

function putMethod(url,data) {
	let reqData = Qs.stringify(data);
	return axios.put(url,reqData,{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
}

export default {
	user: {
		login: (data)=>{
			return postForm('/api/users/login',data)
		},
		getUser: (data)=>{
			return get('/api/users/query',data)
		},
		getWallet: ()=>{
			return get('/api/wallet/query')
		}
	},
	public: {
		query: ()=>{
			return get('/api/public/query')
		}
	},
	knowledge: {
		query: ()=>{
			return get('/api/knowledge/query')
		}
	}
}