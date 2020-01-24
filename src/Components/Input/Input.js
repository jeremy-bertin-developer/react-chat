import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
    //   isWriting: false
    };
  }

  handleOnChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleOnChangeMessage = e => {
    this.setState({
      message: e.target.value,
      isWriting: true
    });
    let name = this.state.name
    let isWriting = this.state.isWriting;
    this.props.handleMessage(isWriting, name)
  };

  handleClick = () => {
    let name = this.state.name;
    let message = this.state.message;
    this.props.handleOnClickAndScroll(name, message);
    this.setState({
      name: "",
      message: "",
    //   isWriting: false
    });
  };

  render() {
    return (
      <main className="container col-8 mx-auto fixed-bottom">
        <div className="row">
          <div className="col-12">
            <div className="input-group flex-nowrap my-3 border-0">
              <input
                value={this.state.name}
                onChange={this.handleOnChangeName}
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="addon-wrapping"
              ></input>
              <input
                value={this.state.message}
                onChange={this.handleOnChangeMessage}
                type="text"
                className="form-control"
                placeholder="Message"
                aria-label="Message"
                aria-describedby="addon-wrapping"
              ></input>
              <div className="input-group-prepend">
                <button
                  onClick={this.handleClick}
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
    );
  }
}

export default Input;
