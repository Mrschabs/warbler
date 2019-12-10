import React, {Component} from "react";
import { connect } from "react-redux";
import {postNewMessage} from "../store/actions/messages";

class MessageForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: ""
    };
  }

  handleNewMessage = event => {
    event.preventDefault();
    //come back to this in a second
  };
}

function mapStateToProps(state){
  return {
    errors: state.errors
  };

  render() {
    return (
      <form onSubmit={this.handleNewMessage}>
        {this.props.errors && (
          <div className="alert alert-danger">{this.props.errors}</div>
        )}
        <input 
          type="text" 
          className="form-control" 
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        <button type="submit" className="btn btn-success pull-right">
          Add my message!
        </button>
      </form>
    );
  }
}

export default connect(mapStateToProps, {postNewMessage})(MessageForm);