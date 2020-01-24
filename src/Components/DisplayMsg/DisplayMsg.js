import React from "react";

const DisplayMsg = ({ children, blockMessage }) => {
    return (
        <header className="container header-wrapper col-8 mx-auto">
          <div className="row">
            <h2 className="text-left p-3 bg-warning w-100">TchatBox</h2>
            <div className="col-12">{blockMessage}</div>
            <div className="col-12">
                {children}
            </div>
          </div>
        </header>
    )
}

export default DisplayMsg;