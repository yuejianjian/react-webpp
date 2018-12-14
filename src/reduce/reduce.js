import { LOGIN_INFO } from '../action/index';
const initialState={
    addcarding:false,
    reslut:null
}

export default function crm(state=initialState,action={}){
    switch(action.type){
        case LOGIN_INFO:{
            console.log(action);
            return {
                ...state,
                addcarding:true,
                reslut:action.payload.promise.data
            }
        }
        default:{
            return state;
        }
    }
}