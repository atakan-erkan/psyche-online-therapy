import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleP from "./SingleP";
const PList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=8");
    setUsers(response.data.results);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="p-list">
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            <SingleP user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PList;
