import React from "react";
import "./WhyAahaa.css"; // Make sure this file exists

interface WhyAahaaProps {
  upper: string;
  medium: string;
  lower: string;
  condition?: boolean; // Optional condition prop
}

const WhyAahaa: React.FC<WhyAahaaProps> = ({ upper, medium, lower, condition }) => {
  return (
    <div className={`whyaahaa-container ${condition ? 'whyaahaa-bottom' : ''}`}>
      <div className="whyaahaa-box">
        <h1 className="whyaahaa-text">{upper}</h1>
        <h1 className="whyaahaa-medium-text">{medium}</h1>
        <h2 className="whyaahaa-lower-text">{lower}</h2>
      </div>
      <div className="whyaahaa-question-mark-container">
        <div className="whyaahaa-question-mark whyaahaa-question-mark-bg">?</div>
        <div className="whyaahaa-question-mark whyaahaa-question-mark-top">?</div>
      </div>
    </div>
  );
};

export default WhyAahaa;
