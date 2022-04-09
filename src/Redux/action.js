export const ISLOGIN="ISLOGIN";
export const ISREGISTER="ISREGISTER";
export const TOKEN="TOKEN";
export const GETUSERS="GETUSERS";
export const SETUSER="SETUSER";


export const isLogin=(payload)=>{
    return({
        type: ISLOGIN,
        payload
    })
}
export const isRegister=(payload)=>{
    return({
        type: ISREGISTER,
        payload
    })
}
export const getToken=(payload)=>{
    return({
        type: TOKEN,
        payload
    })
}
export const setUser=(payload)=>{
    return({
        type: SETUSER,
        payload
    })
}
export const getUsers=(payload)=>{
    return({
        type: GETUSERS,
        payload
    })
}
export const getUsersData=()=>(dispatch)=>{
    fetch('https://fake-api-practoproject.herokuapp.com/users')
    .then((res)=>res.json())
    .then((res)=>dispatch(getUsers(res)))
}