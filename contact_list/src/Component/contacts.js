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
        let contacts=this.props.contacts;
        console.log(contacts) 
        return ( 
            <div>
               <table>
                   <tr>
                    <th>Id</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                   </tr>
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