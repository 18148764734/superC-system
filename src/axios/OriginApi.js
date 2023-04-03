import axios from "./OriginIndex";


export const originall = (data) =>{
    return axios.post('/primary/originall ',data)
}
export const getbazi = (data) =>{
    return axios.get('/primary/getbazi?'+'nian='+data.nian+'&yue='+data.yue+'&ri='+data.ri+'&shi='+data.shi)
}


