import React from "react";
import "./YinYang.css";
import 'bootstrap/dist/css/bootstrap.min.css';

interface GreetingProps {
  upper: string;
  lower: number;
}

const YinYang: React.FC<GreetingProps> = ({ upper, lower }) => {
  return (
    <div className="yinyang btn">
      <div className="yin"><h5>{upper}</h5></div>
      <div className="yang trigger-modal" data-bs-toggle="modal"
        data-bs-target="#exampleModal"><h5>{lower}</h5></div>
    </div>
  );
};

export default YinYang;
