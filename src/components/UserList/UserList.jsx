import React from "react";
import User from "../User/User";
import Users from "../../data.json"
import "./UserList.css"
function UserList({ users }) {
  return (
    <div className="user-list wrapper">
      {
        Users && Users.map((user,index) => {
          return <User key={index} user={user}></User>
        })
      }
    </div>
  );
}

export default UserList;
