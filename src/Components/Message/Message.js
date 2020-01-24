import React from "react";

const Message = ({
  src,
  classNameImg,
  classNameCardBody,
  classNameCardTitle,
  name,
  message
}) => {
  return (
    <div className="card my-2 border-0 shadow">
      <img src={src} className={classNameImg} alt="..." />
      <div className={classNameCardBody}>
        <h5 className={classNameCardTitle}>{name}</h5>
        <p className="card-text">{message}</p>
      </div>
    </div>
  );
};

export default Message;
