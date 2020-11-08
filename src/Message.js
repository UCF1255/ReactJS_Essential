import React, { Component } from "react";

class Message extends Component{
  render(){
    return(
      console.log(this.props),
      <div >
        <h5 style={{color:this.props.color}}>{this.props.msg}</h5>
        <p>I'll check back in {this.props.minutes} minutes</p>
      </div>
    )
  }
}

export default Message;
