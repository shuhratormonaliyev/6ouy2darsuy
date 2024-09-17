import React from "react";
import User from "./components/User/User";
import Users from "./data.json";
import "./App.css"
import UserList from "./components/UserList/UserList";
import Address from "./components/Adress/Adress";
function App() {
  // console.log(Users);
  const address = {
    region: "Some Region",
    firstName: "Valentin",
    lastName: "Satterfield",
    phone: "(922) 346-6889",
    email: "Therese.Boehm3@gmail.com"
  };
  return (
    <div className="wrapper">
      <UserList></UserList>
      <h1>Address Information</h1>
      <Address address={address} /> 
    </div>
  );
}

export default App;
