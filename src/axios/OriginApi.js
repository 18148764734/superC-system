import axios from "./OriginIndex";


export const originall = (data) =>{
    return axios.post('/primary/originall ',data)
}
export const getbazi = (data) =>{
    return axios.get('/primary/getbazi?'+'nian='+data.nian+'&yue='+data.yue+'&ri='+data.ri+'&shi='+data.shi)
}
export const getpage = (data) =>{
    return axios.get(
        '/primary/getpage?'
        +'historyTime='+data.historyTime
        +'&historyType='+data.historyType
        +'&page='+data.page
        +'&pageSize='+data.pageSize
        +'&phone='+data.phone
        +'&userName='+data.userName
        )
}
export const getId = (id) =>{
    return axios.get(
        '/primary/gethistoryresult?'
        +'historyId='+id
        )
}


