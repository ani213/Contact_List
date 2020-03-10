import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { showEditForm, editDetailsChange } from './contactState';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PulseLoader from './common/PulseLoader';
class EditContact extends Component {
    state = {  }
    handleCancle=()=>{
        this.props.showEditForm({id:"",YN:false})
    }
   handleOnchange=(e)=>{
     this.props.editDetailsChange(e.target.name,e.target.value)
   } 
    render() { 
        let classes=this.props.classes
        let details=this.props.store.editDetails
        let data={width:"100%",height:"100%",top:"0", animationDuration: "3s",}
        console.log(details,"details")
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
            <div className={classes.pulse_loader} style={{
                        width: "100%",
                        height: "100%",
                        top:"0",
                        animationDuration: "5s"
                    }}></div>
             <PulseLoader style={data}/>       
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
},
cancleButtonContainer:{
    float:"right"
},
saveButtonContainer:{
    textAlign: "center",
    margin: "12px"
},

'@keyframes pulse_loader': {
    "0% ":{
      opacity: "0",
      transform: "scale(0)"
    },
    "60%": {
      opacity: "0.1"
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
    return{
        store:state.contacts
    }
}
const mapDispatchToProps={
    showEditForm,
    editDetailsChange


} 

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(EditContact));