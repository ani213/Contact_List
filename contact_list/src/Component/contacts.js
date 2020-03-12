import React, { Component } from 'react';
import contacts from "../contact_list.json"
import {connect} from "react-redux";
import { setContacts, handleAddContactForm, deleteContact, showEditForm } from './contactState.js';
import {withStyles} from '@material-ui/core'
import SearchInput from './common/searchInput.js';
import AddContact from './AddContact.js';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import EditContact from './EditContact.js';
class Contacts extends Component {
    state = { 
        search:"",
     }
handleSearch=(e)=>{
    let search=e.target.value;
    this.setState({
        search:e.target.value
    })
    let localStorageData = JSON.parse(localStorage.getItem("contact"))
    let searchItem=localStorageData && localStorageData.filter((data)=>{
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
handleDelete=(id)=>{
this.props.deleteContact(id)
}
handleEdit=(contact)=>{
    let data=contact;
    data.YN=true
    // console.log("id",data)
this.props.showEditForm(data)
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
        // console.log(this.props.contacts,"contact") 
        return ( 
            <div>
                <div className={`${classes.headingMainContainer}`}>
                    <div className={classes.headingContainer} >
                      <h3>Contact List</h3>
                      <div className={classes.pulse_loader}>
                    </div>
                    <div className={classes.pulse_loader} style={{
                        width: "92vw",
                        height: "291px",
                        animationDuration: "5s"
                    }}></div>
                    <div className={classes.pulse_loader} style={{
                        width: "200px",
                        height: "200px",
                        animationDuration: "15s"
                    }}></div>
                    <div className={classes.pulse_loader} style={{
                        width: "92vw",
                        height: "291px",
                        animationDuration: "14s"
                    }}>
                    </div>
                    <div className={classes.pulse_loader} style={{
                        width: "92vw",
                        height: "291px",
                        animationDuration: "20s"
                    }}>
                    </div>
                    <div className={classes.pulse_loader} style={{
                        width: "92vw",
                        height: "291px",
                        animationDuration: "5s"
                    }}>
                    </div>
                    <div className={classes.pulse_loader} style={{
                        width: "92vw",
                        height: "291px",
                        animationDuration: "39s"
                    }}>
                    </div>
                    <div className={classes.pulse_loader} style={{
                        width: "92vw",
                        height: "291px",
                        animationDuration: "25s"
                    }}>
                    </div>
                    <div className={classes.pulse_loader} style={{
                        width: "92vw",
                        height: "291px",
                        animationDuration: "10s"
                    }}>
                    </div>
                    <div className={classes.pulse_loader} style={{
                        width: "92vw",
                        height: "291px",
                        animationDuration: "15s"
                    }}>
                    </div>
                    <div className={classes.pulse_loader} style={{
                        width: "9vw",
                        height: "298px",
                        animationDuration: "4s"
                    }}>
                    </div>
                    </div>
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
                <div className={classes.tableContainer}>
               <table className={`table table-striped`} onClick={this.hideAddContactForm}>
                   <tr>
                    <th>No.</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th colSpan="3">Phone No</th>
                   </tr>
                   <tbody>
                       {
                           contacts && contacts.map((contact,index)=>{
                            //    console.log(contact)
                               return(
                                   <tr className={classes.tr} key={index}>
                                       <td><span>{index+1}</span></td>
                                       <td><span><img src={contact.avatar_url} alt="avatar"/></span> </td>
                                       <td><span>{contact.first_name}</span><span> {contact['last_name']}</span></td>
                                       <td><span>{contact.email}</span></td>
                                       <td><span>{contact.phone}</span></td>
                                       <td className={classes.editRow}><IconButton  onClick={(e)=>this.handleEdit(contact)}><EditIcon /></IconButton>
                                         { ( this.props.contacts.editContact.id==contact.id && this.props.contacts.editContact.YN)&&<EditContact />}
                                       </td>
                                       <td><IconButton onClick={(e)=>this.handleDelete(contact.id)}><DeleteForeverIcon/></IconButton></td>
                                   </tr>
                               )
                           })
                       }
                   </tbody>
               </table>
               </div>
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
    tableContainer:{
        position:"relative"
    },
    tableMainContainer: {
        boxShadow:'0 0 1px 1px #ccc',
        margin:'0px 30px 0px 30px',
        padding:'20px 0px 0px 0px'
    },
    tr: {
        "& td": {
            verticalAlign: "inherit !important",
        },
        "&:hover":{
            background:"#a9f5dd !important", 
        }
    },
    headingMainContainer: {
        display:"flex",
        justifyContent:"center",
        padding:"50px",
        background:"#112B50", 
        margin:'0px 30px 0px 30px',
        boxShadow:'0 0 1px 1px #ccc',
    },
    headingContainer:{
        position: "relative",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"200px",
        height:"200px",
        background:"white", 
        boxShadow:'0 0 1px 1px #ccc',
        animationName: '$blinker',
        animationDuration: '4s',
        animationIterationCount:'infinite',
        animationDirection:"alternate"
    },
    editRow:{
        position:"relative"
    },
    '@keyframes blinker':{
        from:{borderRadius:"2%",
                },
        to:{
            borderRadius:"50%",
            background:"tomato",
            color:"#03446A"
            }
    },
    '@keyframes pulse_loader': {
        "0% ":{
          opacity: "0",
          transform: "scale(0)"
        },
        "60%": {
          opacity: "1"
        },
        "100% ":{
          opacity: "0",
          transform: "scale(1)"
        }
      },
      pulse_loader:{
        height: "200px",
        margin: "auto 0",
        width: "200px",
        animationName: "$pulse_loader",
        animationIterationCount: "infinite",
        animationDuration: "7s",
        boxShadow: "0 0 5px #6290D1",
        borderRadius: "50%",
        border: "3px solid #6290D1",
        content: '',
        display: "block",
        opacity: "0",
        position: "absolute",
      } 

})

const mapStateToProps=(state)=>{
    return {
          contacts:state.contacts,
    }
} 
const mapDispatchToProps={
    setContacts,
    handleAddContactForm,
    deleteContact,
    showEditForm,

}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Contacts));