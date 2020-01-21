import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      blockMessage: "",
      isCliked: false
    };
    this.allMessages = [];
  }

  handleOnChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleOnChangeMessage = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleOnClick = () => {
    const blockMessage = (
      <>
        <div className="card my-2 border-0 shadow">
          <div
            className={
              this.state.isCliked
                ? "card-body text-right"
                : "card-body text-left"
            }
          >
            <h5
              className={
                this.state.isCliked
                  ? "card-title text-warning"
                  : "card-title text-success"
              }
            >
              Message from : {this.state.name}
            </h5>
            <p className="card-text">{this.state.message}</p>
          </div>
        </div>
      </>
    );
    this.allMessages.push(blockMessage);

    this.setState({
      blockMessage: this.allMessages,
      isCliked: !this.state.isCliked
    });
  };

  render() {
    return (
      <>
        <header className="container header-wrapper border rounded my-3 col-8 mx-auto">
          <div className="row">
            <h2 className="text-center col-12">TchatBox</h2>
            <div className="col-12">{this.state.blockMessage}</div>
          </div>
        </header>
        <main className="container col-8 mx-auto">
          <div className="row">
            <div className="col-12">
              <div className="input-group flex-nowrap">
                <input
                  onChange={this.handleOnChangeName}
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="addon-wrapping"
                ></input>
                <input
                  onChange={this.handleOnChangeMessage}
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  aria-label="Message"
                  aria-describedby="addon-wrapping"
                ></input>
                <div class="input-group-prepend">
                  <button
                    onClick={this.handleOnClick}
                    type="button"
                    className="btn btn-success"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
