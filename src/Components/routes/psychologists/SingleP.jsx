import React from "react";

const SingleP = ({ user }) => {
  return (
    <div className="single-p">
      <h1>{user.name.first}</h1>
    </div>
  );
};

export default SingleP;
