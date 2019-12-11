import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchMessages, removeMessage} from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
  componentDidMount(){
    this.props.fetchMessages();
  }
  render(){
    const { messages, removeMessage } = this.props
    let MessageList = messages.map(m => (
      <MessageItem 
        key={m._id} 
        date={m.createdAt} 
        text={m.text}
        username={m.user.username}
        profileImageUrl={m.user.profileImageUrl}
        removeMessage={removeMessage.bind(this, m.user._id, m._id)}
      />
    ));
    return (
      <div className="row col-sm-8">
        <div className="offset-1 col-sm-10">
          <ul className="list-group" id="messages">
            {MessageList}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, {fetchMessages, removeMessage})(MessageList);