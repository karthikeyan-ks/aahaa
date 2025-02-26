import React from "react";
import "./YinYang.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface GreetingProps {
  upper: string;
  lower: string;
  handlebutton: (value: string, i: number) => void;
}

const values: Record<string, number> = {
  "Digital Video Advertising": 1,
  "Corporate Movies": 2,
  "Social Media Reels": 3,
  "Influencer Marketing": 4,
  "Content Creation": 5,
  "Product Shooting": 6,
};

const YinYang: React.FC<GreetingProps> = ({ upper, lower, handlebutton }) => {
  return (
    <div
      className="yinyang btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <button
        className="button"
        onClick={() => {
          if (values[upper] !== undefined) {
            handlebutton(upper, values[upper]);
          }
        }}
      >
        {upper}
      </button>
      <button
        className="button"
        onClick={() => {
          if (values[lower] !== undefined) {
            handlebutton(lower, values[lower]);
          }
        }}
      >
        {lower}
      </button>
    </div>
  );
};

export default YinYang;
