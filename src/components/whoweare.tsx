import React from "react";
import "./whoweare.css"; // Make sure this file exists

interface WhyAahaaProps {
  upper: string;
  medium: string;
  lower: string;
  condition?: boolean; // Optional condition prop
}

const WhyAahaa: React.FC<WhyAahaaProps> = ({ upper, medium, lower, condition }) => {
  return (
    <div className={`why-aahaa-container ${condition ? 'bottom' : ''}`}>
      <div className="why-box">
        <h1 className="why-text">{upper}</h1>
        <h1 className="aahaa-text">{medium}</h1>
        <h2 className="entertainment-text">{lower}</h2>
      </div>
      <div className="question-mark-container">
        <div className="question-mark question-mark-bg">?</div>
        <div className="question-mark question-mark-top">?</div>
      </div>
    </div>
  );
};

export default WhyAahaa;
