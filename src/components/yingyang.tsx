import "./YinYang.css";

const YinYang = () => {
  return (
    <div className="yin-yang">
      <div className="half black">
        <div className="dot white-dot"></div>
      </div>
      <div className="half white">
        <div className="dot black-dot"></div>
      </div>
    </div>
  );
};

export default YinYang;
