import './whoweare.css'
const WhoWeAre = () => {
    return (
      <div className="relative flex items-center justify-center h-[300px] w-[500px] bg-white shadow-lg rounded-lg p-5">
        {/* Background Shadow */}
        <div className="absolute top-3 left-3 w-full h-full bg-teal-700 rounded-lg -z-10"></div>
        
        {/* Question Mark */}
        <div className="absolute left-0 -top-10 text-teal-700 text-[200px] font-bold leading-none">
          ?
        </div>
  
        {/* Text Content */}
        <div className="text-teal-700 text-5xl font-bold text-right">
          WHO <br /> WE <br /> ARE
        </div>
      </div>
    );
  };
  
  export default WhoWeAre;
  