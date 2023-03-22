import React, { useEffect } from "react";
import "./Psychologists.css";

const SingleP = ({ user }) => {
  const handleClick = () => {
    <div>{user}</div>;
  };
  return (
    <div className="card">
      <div className="user-info">
        <img className="" src={user.picture.large} alt="" />
        <div className="card-body">
          <h3 className="card-title">
            Dr. {user.name.first} {user.name.last}
          </h3>
          <h6 className="title">@{user.login.username}</h6>
          <h5 className="card-text">
            {user.location.city} | {user.location.country}
          </h5>
          <p className="card-text">{user.email}</p>
          <p className="card-text">{user.phone}</p>
          <button className="btn btn-primary" onClick={() => handleClick()}>
            DAHA FAZLA TANI
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleP;
