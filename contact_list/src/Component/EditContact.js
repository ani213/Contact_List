import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { showEditForm, editDetailsChange, editDetails } from './contactState';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PulseLoader from './common/PulseLoader';
class EditContact extends Component {
    state = {  }
    handleCancle=()=>{
        // this.props.showEditForm({id:"",YN:false})
        setTimeout(this._cancle, 4000);
    }
   handleOnchange=(e)=>{
     this.props.editDetailsChange(e.target.name,e.target.value)
   } 
   handleSave=()=>{
    this.props.editDetails(this.props.store.editDetails);
    // this.props.showEditForm({id:"",YN:false})
    setTimeout(this._cancle, 4000);
   }
  _cancle=()=>{
    this.props.showEditForm({id:"",YN:false})
  }

    render() { 
        let classes=this.props.classes
        let details=this.props.store.editDetails
        let data={width:"100%",height:"100%",top:"0", animationDuration: "3s",}
        let data1={width:"100%",height:"100%",top:"0", animationDuration: "5s",}

        // console.log(details,"details")
        return ( 
            <div className={classes.mainContainer}>
                <div className={classes.cancleButtonContainer}>
                    <IconButton onClick={this.handleCancle}><CloseIcon /></IconButton>
                </div>
            <div className={classes.formContainer}>
                <div>
                    <div>
                        <label>Name</label>
                        <input type="text" 
                      className={`form-control`} 
                      name="first_name"
                      value={details.first_name || details.first_name}
                      onChange={this.handleOnchange}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" 
                      className={`form-control`} 
                      name="last_name"
                      value={details.last_name||details.last_name}
                      onChange={this.handleOnchange}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" 
                      className={`form-control`} 
                      name="email"
                      value={details.email||details.email}
                      onChange={this.handleOnchange}/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="text" 
                      className={`form-control`} 
                      name="phone"
                      value={details.phone||details.phone}
                      onChange={this.handleOnchange}/>
                    </div>
                </div>
                <div className={classes.saveButtonContainer}>
                <button type="button" className="btn btn-primary" onClick={this.handleSave}>Save</button>
                </div>
            </div>
             {/* <PulseLoader style={data1}/>     */}
             {/* <PulseLoader style={data}/>        */}
            </div>
         );
    }
}
const styles=theme=>({
mainContainer:{
    position:"absolute",
    right:"110px",
    bottom:"-118px", 
},
formContainer:{
    width:"300px",
    height:"360px",
    background:"#39ac73",
    padding:"20px",
    borderRadius:"15px",
    boxShadow: "-20px 25px 6px 3px darkslategrey",
    animationName: "$for_content",
    animationIterationCount: "1",
    animationDuration: "0.4s",
},
cancleButtonContainer:{
    float:"right"
},
saveButtonContainer:{
    textAlign: "center",
    margin: "12px"
},
'@keyframes for_content': {
  "0% ":{
   width:"60px",
   height:"360px",
  },
  "100% ":{
      width:"300px",
      height:"360px",
  }
},
  
})

const mapStateToProps=(state)=>{
    return{
        store:state.contacts
    }
}
const mapDispatchToProps={
    showEditForm,
    editDetailsChange,
    editDetails,



} 

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(EditContact));