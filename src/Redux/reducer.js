import { GETUSERS,ISLOGIN,SETUSER,ISREGISTER,TOKEN } from "./action";
const initState={
    users:[],
    isLoginStatus: false,
    isRegisterStatus: false,
    token:"",
    loggedinuser:{}
}
export const loginReducer=(store=initState,{type,payload})=>{
    switch(type){
        case ISLOGIN:
            return{
                ...store,
                isLoginStatus: payload
            }
        case ISREGISTER:
            return{
                ...store,
                isRegisterStatus: payload
            }
        case TOKEN:
            return{
                ...store,
                token: payload
            }
        case SETUSER:
            return{
                ...store,
                loggedinuser: {...payload}
            }
        case GETUSERS:
            return{
                ...store,
                users:[...payload]
            }
        default: return store;
    }
}