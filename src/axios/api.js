import axios from "./index";

export const GetCode = (data)=>{
    return axios.post('/api/send',data)
}

export const signup = (data) =>{
    return axios.post('/api/signup',data)
}
export const login = (data) =>{
    return axios.post('/api/login',data)
}
export const logout = (data) =>{
    return axios.post('/api/logout',data)
}
export const loginsms = (data) =>{
    return axios.post('/api/loginsms ',data)
}
export const resetpassword = (data) =>{
    return axios.post('/api/resetpassword ',data)
}
export const updatephone = (data) =>{
    return axios.post('/api/updatephone ',data)
}
export const checkphone = (data) =>{
    return axios.post('/api/checkphone ',data)
}
export const auths = (data) =>{
    return axios.post('/api/auth ',data)
}
export const getdayun = (data) =>{
    
    return axios.get('/life/getdayun?'+'gender='+data.gender+'&nian='+data.nian+'&yue='+data.yue+'&ri='+data.ri+'&shi='+data.shi)
}


