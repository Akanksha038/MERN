// import { Component } from "react";
import './Button.css';



// class Button extends Component{
//   render(){
//     return    <button className="button">Click me</button>
//   }
// }

// const DangerButton=()=>{
//   return (
//     <button className="red-button">Delete </button>
//   )

// }


//direct export =>multiple component export karne ka way

export function DangerButton() {

  const buttonText = "Delete";
  return (
    <button className="red-button">{buttonText} </button>
  )

}

export function SucessButton() {
  return (
    <button className="green-button">Delete </button>
  )

}




