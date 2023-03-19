import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleP from "./SingleP";
import "./Psychologists.css";
const PList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=120");
    setUsers(response.data.results);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="container mt-5 psikolog">
      <div className="row filter-list justify-content-center">
        {users.map((user, i) => (
          <div className="col-lg-3 col-md-4 filter-item">
            <div key={i}>
              <SingleP user={user} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PList;