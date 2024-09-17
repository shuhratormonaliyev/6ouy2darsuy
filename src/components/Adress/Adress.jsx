import React from "react";
import '../Adress/Adress.css'
function Address({ address }) {
  console.log("address", "zip" in address && address.zip);
  return (
    <div className="text">
      <p>Region: {address.region}</p>
      <p>zip: {address.zip}</p>
    </div>
  );
}

export default Address;
