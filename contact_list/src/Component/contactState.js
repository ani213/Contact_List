
export const initialState={
     contacts:[],
     addContactYN:false,
     error:"",
     success:false,
     editContact:{id:"",YN:false},
     editDetails:null
}
export const SET_CONTACTS="SET_CONTACTS";
export const HANDLE_ADD_CONTACT_FORM="HANDLE_ADD_CONTACT_FORM";
export const ADD_CONTACT="ADD_CONTACT";
export const CLEAR_ERROR="CLEAR_ERROR";
export const DELETE_CONTACT='DELETE_CONTACT';
export const CLEAR_SUCCESS='CLEAR_SUCCESS';
export const SHOW_EDIT_FORM="SHOW_EDIT_FORM";
export const EDIT_DETAILS_CHANGE="EDIT_DETAILS_CHANGE";
export const EDIT_DETAILS="EDIT_DETAILS"

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
export const clearError=()=>dispatch=>{
    dispatch({
        type:CLEAR_ERROR
    })
}
export const clearSuccess=()=>dispatch=>{
    dispatch({
        type:CLEAR_SUCCESS
    })
}
export const deleteContact=(id)=>dispatch=>{
dispatch({
    type:DELETE_CONTACT,
    payload:id,
})
}
export const showEditForm=(data)=>dispatch=>{
    dispatch({
        type:SHOW_EDIT_FORM,
        payload:data,
    })
}
export const editDetailsChange=(name,value)=>dispatch=>{
dispatch({
        type:EDIT_DETAILS_CHANGE,
        payload:{name:name,value:value}
})
}
export const editDetails=(data)=>dispatch=>{
    dispatch({
        type:EDIT_DETAILS,
        payload:data,
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
                        id:oldContacts[oldContacts.length-1].id+1,
                        first_name:payload.firstName,
                        last_name:payload.lastName,
                        email:payload.email,
                        avatar_url:`https://robohash.org/${payload.firstName}?size=100x100&set=set1`,
                        phone:payload.phone,
                    } 
                    oldContacts.push(details);
                    // console.log(oldContacts)
                   localStorage.setItem("contact", JSON.stringify(oldContacts))
                   return{
                       ...state,
                       contacts:oldContacts,
                       success:true,
                   }
                } 
                   else{
                       return{
                           ...state,
                           error:`${data} is required but missing`
                       }
                   }     
         
        case DELETE_CONTACT:
            let newContact=state.contacts.filter((ele)=>{
                if(ele.id!=payload)
                {
                    return ele;
                }
            }) 
            localStorage.setItem("contact", JSON.stringify(newContact))
            return{
                ...state,
                contacts:newContact
            }
        case CLEAR_ERROR:
            return{
                ...state,
                error:""
            }    
        case CLEAR_SUCCESS:
            return{
                ...state,
                success:false
            }
        case SHOW_EDIT_FORM:
            // console.log("payload",payload)
            return{
                ...state,
                editContact:{id:payload.id,YN:payload.YN},
                editDetails:payload
            } 
        case EDIT_DETAILS_CHANGE:
           return {
              ...state,
              editDetails:{...state.editDetails,[payload.name]:payload.value}
            }   
        case EDIT_DETAILS:
            let contactDetails=state.contacts.map((ele)=>{
                if(ele.id==payload.id){
                    return{
                        ['id']:payload.id,
                        ['first_name']:payload.first_name,
                        ['last_name']:payload.last_name,
                        ['email']:payload.email,
                        ['phone']:payload.phone,
                        ['avatar_url']:payload.avatar_url,
                    }
                }
                else
                  return ele;
            })
            console.log("res",contactDetails)
            localStorage.setItem("contact", JSON.stringify(contactDetails)) 
            return{
                ...state,
                contacts:contactDetails
            }   
        default:
            return state
    }

}