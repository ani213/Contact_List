export const initialState={
     contacts:[],
}
export const SET_CONTACTS="SET_CONTACTS";
export const setContacts=(contacts)=>dispatch=>{
dispatch({
    type:SET_CONTACTS,
    payload:contacts
})
}

export default function contactReducer(state=initialState,{type,payload}){
    switch(type){
        case SET_CONTACTS:
            return{
                ...state,
                contacts:payload
            }
        default:
            return state
    }

}