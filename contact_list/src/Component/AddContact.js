import React, { Component } from 'react';
import {withStyles} from '@material-ui/core'
class AddContact extends Component {
    state = {  }
    render() { 
        let classes=this.props.classes;
        return ( 
                  <div className={classes.relative}>
                  <div className={classes.mainContainer}>
                  <div className={classes.formContainer}>
                 <div className={classes.form}>
                   <div className={classes.content}>  
                      <label className={classes.font}>Name</label>  
                      <input type="text" 
                      className={`form-control`} 
                      placeholder="Name" 
                      onChange={(e)=>{this.props.onChange&&this.props.onChange(e)}}/>
                   </div>
                   <div className={classes.content}>
                   <label className={classes.font}>Last Name</label>
                   <input type="text" 
                   className={`form-control`} 
                   placeholder="Last Name" 
                   onChange={(e)=>{this.props.onChange&&this.props.onChange(e)}}/>
                   </div>
                   <div className={classes.content}>
                    <label className={classes.font}>Email</label>
                   <input type="text" 
                   className={`form-control`} 
                   placeholder="Email" 
                   onChange={(e)=>{this.props.onChange&&this.props.onChange(e)}}/>
                   </div>
                   <div className={classes.content}>
                    <label className={classes.font}>Phone</label>
                   <input type="text" 
                   className={`form-control`} 
                   placeholder="Phone" 
                   onChange={(e)=>{this.props.onChange&&this.props.onChange(e)}}/>
                   </div>
                   <div className={classes.buttonContainer}>
                       <button type="button" className="btn btn-primary">Save</button>
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
export default withStyles(styles)(AddContact);