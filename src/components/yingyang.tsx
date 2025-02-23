import React from "react";
import "./YinYang.css";
import 'bootstrap/dist/css/bootstrap.min.css';

interface GreetingProps {
  upper: string;
  lower: string;
  handlebutton: (value :string) => void;
}

const YinYang: React.FC<GreetingProps> = ({ upper, lower ,handlebutton}) => {
  return (
    <div
      className="yinyang btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <button className="button" onClick={()=>{
        handlebutton(upper)
      }} >{upper}</button>
      <button className="button" onClick={()=>{
        handlebutton(lower)
      }} >{lower}</button>
    </div>

  );
};

export default YinYang;
