import React, { Component } from 'react';
import contacts from "../contact_list.json"
import {connect} from "react-redux";
import { setContacts } from './contactState.js';
class Contacts extends Component {
    state = {  }
componentDidMount() {
    this.props.setContacts(contacts)
}
    render() {
        let contacts=this.props.contacts.contacts;
        // console.log(contacts) 
        return ( 
            <div>
               <table className={`table table-striped`}>
                   <tr>
                    <th>Id</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                   </tr>
                   <tbody>
                       {
                           contacts && contacts.map((contact)=>{
                               console.log(contact)
                               return(
                                   <tr>
                                       <td>{contact.id}</td>
                                       <td><img src={contact.avatar_url} alt="avatar"/> </td>
                                       <td>{contact.first_name}<span> {contact['last_name']}</span></td>
                                       <td>{contact.email}</td>
                                       <td>{contact.phone}</td>
                                   </tr>
                               )
                           })
                       }
                   </tbody>
               </table>
            </div>

         );
    }
}
const mapStateToProps=(state)=>{
    return {
          contacts:state.contacts
    }
} 
const mapDispatchToProps={
    setContacts

}
export default connect(mapStateToProps,mapDispatchToProps)(Contacts);