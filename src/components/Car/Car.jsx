import React from 'react'
import "./Car.css"
function Car(car) {
    // console.log("car.jsx",car);
  return (
    <div className='car'>
        <span>{car.car}</span>
    </div>
  )
}

export default Car;