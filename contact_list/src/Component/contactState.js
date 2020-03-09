
export const initialState={
     contacts:[],
     addContactYN:false,
     error:""
     
}
export const SET_CONTACTS="SET_CONTACTS";
export const HANDLE_ADD_CONTACT_FORM="HANDLE_ADD_CONTACT_FORM";
export const ADD_CONTACT="ADD_CONTACT";
export const CLEAR_ERROR="CLEAR_ERROR";

export const setContacts=(contacts)=>dispatch=>{
dispatch({
    type:SET_CONTACTS,
    payload:contacts
})
}
export const handleAddContactForm=(showOrHide)=>dispatch=>{
dispatch({
    type:HANDLE_ADD_CONTACT_FORM,
    payload:showOrHide
})
}
export const addContact=(contactDetails)=>dispatch=>{
    dispatch({
        type:ADD_CONTACT,
        payload:contactDetails
    })
}

export const _validateDetail=(arr,details)=>{
         for(let i=0;i<arr.length;i++){
             if(!details[arr[i]]){
                 return arr[i];
             }
         }
         return "ALLOK"
}


export default function contactReducer(state=initialState,{type,payload}){
    switch(type){
        case SET_CONTACTS:
            return{
                ...state,
                contacts:payload
            }
        case HANDLE_ADD_CONTACT_FORM:
            return{
                ...state,
                addContactYN:payload
            }  
        case ADD_CONTACT:
            let oldContacts=state.contacts;
            //  console.log(payload)
             let arr=["firstName","lastName","email","phone"];
            let data= _validateDetail(arr,payload)
            console.log(data,"data")
                 if(data=="ALLOK"){
                    let details={
                        id:oldContacts.length+1,
                        first_name:payload.firstName,
                        last_name:payload.lastName,
                        email:payload.email,
                        avatar_url:"https://robohash.org/quasimagnilaudantium.png?size=100x100&set=set1",
                        phone:payload.phone,
                    } 
                    oldContacts.push(details);
                    // console.log(oldContacts)
                   localStorage.setItem("contact", JSON.stringify(oldContacts))
                   return{
                       ...state,
                       contacts:oldContacts
                   }
                } 
                   else{
                       return{
                           ...state,
                           error:`${data} is missing`
                       }
                   }     
             
        default:
            return state
    }

}