import React from "react";
import "./YinYang.css";
import 'bootstrap/dist/css/bootstrap.min.css';

interface GreetingProps {
  upper: string;
  lower: string;
}

const YinYang: React.FC<GreetingProps> = ({ upper, lower }) => {
  return (
    <div className="yinyang btn">
      <button className="button"> {upper}
      </button>
      <button className="button"> {lower}
      </button>
    </div>

  );
};

export default YinYang;
