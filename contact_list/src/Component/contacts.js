import React, { Component } from 'react';
import contacts from "../contact_list.json"
import {connect} from "react-redux";
import { setContacts, handleAddContactForm } from './contactState.js';
import {withStyles} from '@material-ui/core'
import SearchInput from './common/searchInput.js';
import AddContact from './AddContact.js';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';


class Contacts extends Component {
    state = { 
        search:"",
     }
handleSearch=(e)=>{
    let search=e.target.value;
    this.setState({
        search:e.target.value
    })
    let searchItem=contacts.filter((data)=>{
        // console.log(data.first_name)
        if(data.first_name.toLowerCase().includes(search) || data.last_name.toLowerCase().includes(search)){
            return data
        }
    })
        this.props.setContacts(searchItem)
}
showAddContactForm=()=>{
   this.props.handleAddContactForm(true);
}
hideAddContactForm=()=>{
    this.props.handleAddContactForm(false)   
}
componentDidMount() {

    let localStorageData = JSON.parse(localStorage.getItem("contact"))
    // console.log(localStorageData)
    if(!localStorageData){
    localStorage.setItem("contact", JSON.stringify(contacts))        
    this.props.setContacts(contacts)     
    }else{
    this.props.setContacts(localStorageData)     
    }
}
    render() {
        let classes=this.props.classes
        let contacts=this.props.contacts.contacts;
        console.log(this.props.contacts) 
        return ( 
            <div >
                <div className={classes.heading}>
                    <h3>Contact List</h3>
                </div>
                <div className={classes.tableMainContainer}>
                <div className={classes.toolBarContainer}>
                    <div className={classes.searchContainer}>
                    <SearchInput value={this.state.search} onChange={this.handleSearch}/>
                    </div>
                    <div >
                     <div className={classes.buttonContainer}>   
                      <button type="button" className={`btn btn-primary`} onClick={this.showAddContactForm}>Add contact</button>
                     </div>
                     {this.props.contacts.addContactYN && <AddContact />}
                    </div>
                </div>
               <table className={`table table-striped`} onClick={this.hideAddContactForm}>
                   <tr>
                    <th>Id</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th colSpan="2">Phone No</th>
                   </tr>
                   <tbody>
                       {
                           contacts && contacts.map((contact,index)=>{
                            //    console.log(contact)
                               return(
                                   <tr className={classes.tr}>
                                       <td><span>{index+1}</span></td>
                                       <td><span><img src={contact.avatar_url} alt="avatar"/></span> </td>
                                       <td><span>{contact.first_name}</span><span> {contact['last_name']}</span></td>
                                       <td><span>{contact.email}</span></td>
                                       <td><span>{contact.phone}</span></td>
                                       <td><IconButton><DeleteForeverIcon/></IconButton></td>
                                   </tr>
                               )
                           })
                       }
                   </tbody>
               </table>
               </div>
            </div>

         );
    }
}
const styles=theme=>({
    toolBarContainer:{
        display:"flex",
        justifyContent:"space-between"
    },
    buttonContainer:{
        marginRight:"350px"
    },
    searchContainer: {
        width: "50%",
        margin: "0px 10px 19px 10px"
    },
    tableMainContainer: {
        boxShadow:'0 0 1px 1px #ccc',
        margin:'0px 30px 0px 30px',
        padding:'20px 0px 0px 0px'
    },
    tr: {
        "& td": {
            verticalAlign: "inherit !important",
        }
    },
    heading: {
        textAlign: "center",
        padding: "50px"
    },
})

const mapStateToProps=(state)=>{
    return {
          contacts:state.contacts,
    }
} 
const mapDispatchToProps={
    setContacts,
    handleAddContactForm,

}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Contacts));