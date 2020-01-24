import React from "react";
import Message from "./Components/Message/Message";
import DisplayMsg from "./Components/DisplayMsg/DisplayMsg";
import Input from "./Components/Input/Input";

import "bootstrap/dist/css/bootstrap.css";
import * as Scroll from "react-scroll";
import FadeIn from "react-fade-in";
import bart from "./images/bart.png";
import homer from "./images/homer.png";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockMessage: "",
      isCliked: false,
      isWriting: false,
      name: ""
    };
    this.allMessages = [];
  }

  handleOnScroll = smooth => {
    let scroll = Scroll.animateScroll;
    scroll.scrollToBottom(smooth);
  };

  handleOnClick = (name, message) => {
    const blockMessage = (
      <>
        <FadeIn>
          <Message
            src={this.state.isCliked ? homer : bart}
            classNameImg={!this.state.isCliked ? "left m-1" : "right m-1"}
            classNameCardBody={
              this.state.isCliked
                ? "card-body text-right"
                : "card-body text-left"
            }
            classNameCardTitle={
              this.state.isCliked
                ? "card-title text-warning"
                : "card-title text-success"
            }
            name={name}
            message={message}
          />
        </FadeIn>
      </>
    );
    this.allMessages.push(blockMessage);

    this.setState({
      blockMessage: this.allMessages,
      isCliked: !this.state.isCliked,
      isWriting: false
    });
  };

  handleMessage = (isWriting, name) => {
    this.setState({
      isWriting: isWriting,
      name: name
    });
  };

  handleOnClickAndScroll = (name, message) => {
    this.handleOnClick(name, message);
    this.handleOnScroll();
  };

  render() {
    return (
      <>
        <DisplayMsg blockMessage={this.state.blockMessage}>
          {this.state.isWriting && (
            <FadeIn>
              <div className="card my-2 border-0 shadow pending">
                <div className="card-body text-left">
                  <p className="card-text">
                    <em>{this.state.name} is typing ... </em>
                  </p>
                </div>
              </div>
            </FadeIn>
          )}
        </DisplayMsg>
        <Input
          handleOnClickAndScroll={this.handleOnClickAndScroll}
          handleMessage={this.handleMessage}
        />
      </>
    );
  }
}

export default App;
