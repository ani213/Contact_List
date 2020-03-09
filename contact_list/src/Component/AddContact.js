import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { handleAddContactForm, addContact } from './contactState';
import { connect } from 'react-redux';
class AddContact extends Component {
    state = { 
        details:{},
     }

    handleCancle=()=>{
        this.props.handleAddContactForm(false)
    }
  handleSave=()=>{

    this.props.addContact(this.state.details)
  }
  handleOnchange=(e)=>{
    //   console.log(e.target.name,e.target.value)
      this.setState({
          details:{...this.state.details,[e.target.name]:e.target.value}
      })
  }
    render() { 
        let classes=this.props.classes;
        // console.log(this.state.details)
        return ( 
                  <div className={classes.relative}>
                  <div className={classes.mainContainer}>
                  <div className={classes.formContainer}>
                 <div className={classes.form}>
                     <div className={classes.closeIcon}>
                         <IconButton onClick={this.handleCancle}><CloseIcon/></IconButton>
                     </div>
                   <div className={classes.content}>  
                      <label className={classes.font}>Name</label>  
                      <input type="text" 
                      className={`form-control`} 
                      name="firstName"
                      placeholder="Name" 
                      onChange={this.handleOnchange}/>
                   </div>
                   <div className={classes.content}>
                   <label className={classes.font}>Last Name</label>
                   <input type="text" 
                   className={`form-control`} 
                   name="lastName"
                   placeholder="Last Name" 
                   onChange={this.handleOnchange}/>
                   </div>
                   <div className={classes.content}>
                    <label className={classes.font}>Email</label>
                   <input type="text" 
                   className={`form-control`} 
                   placeholder="Email" 
                   name="email"
                   onChange={this.handleOnchange}/>
                   </div>
                   <div className={classes.content}>
                    <label className={classes.font}>Phone</label>
                   <input type="text" 
                   className={`form-control`} 
                   placeholder="Phone" 
                   name="phone"
                   onChange={this.handleOnchange}/>
                   </div>
                   <div className={classes.buttonContainer}>
                       <button type="button" className="btn btn-primary" onClick={this.handleSave}>Save</button>
                   </div>
                   </div>
                  </div>
                </div> 
                </div>);
    }
}
const styles=theme=>({
    relative:{
        position:"relative"
    },
    mainContainer:{
    position:"absolute",
    borderWidth:"19px",
    content: " ",
    borderStyle:"solid",
    borderColor:'#39ac73 transparent transparent transparent',
    left:"33px",
    width:"20px"
    },
    formContainer:{
       position:"absolute",
       left:"-150px"
    },
    form:{
        paddingTop:"20px",
        width:"300px",
        height:"400px",
        background:"#39ac73",
        borderRadius:"30px",
    },
    closeIcon:{
        position:"absolute",
        top:"0px",
        right:"5px",
    },
    content:{
     display:"flex",
     flexFlow:"column",
     padding:"0px 15px 15px 15px"
    },
    font:{
        fontWeight:"bold"
    },
    buttonContainer:{
        textAlign:"center"
    },
})
const mapStateToProps=(state)=>{
    return {
        store:state.contacts
    }
}
const mapDispatchToProps={
    handleAddContactForm,
    addContact,

}

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(AddContact));