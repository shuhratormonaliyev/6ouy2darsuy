import React from "react";
import Address from "../Adress/Adress"
import Car from "../Car/Car";
import "./User.css"
function User({ user }) {
  console.log("user.jsx",user);
  return (
    <div className="user-card">
      <img width={296} height={300} src={user.image} alt="" />
      <p>firstName: {user.firstName}</p>
      <p>lastName: {user.lastName}</p>
      <p className="tell">phone: {user.phone}</p>
      <Address address={user.address}></Address>
      <a href={user.email} className="email">email: {user.email}</a>
      { user.cars && user.cars.map((car,index)=>{
      return <Car key={index} car={car}></Car>
      })}
    </div>
  );
}

export default User;
