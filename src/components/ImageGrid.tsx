const videos = [
  "https://drive.google.com/file/d/1dRp8NfHYdZkfEs81Adq884cF5vVUcy1-/preview",
  "https://www.instagram.com/reel/DF7iYF0Mykp/embed",
  "https://www.instagram.com/reel/C06jWhCvB7K/embed",
  "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
  "https://images.pexels.com/photos/6483589/pexels-photo-6483589.jpeg",
  "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
];
interface ImageGridProps {
  index: number; // Making it optional since it's not being used
}

export default function ImageGrid({ index }: ImageGridProps) {
  return (
    
    <div style={containerStyle}>
      {index <= 3 ? (
        <iframe
          style={iframeStyle}
          src={videos[index - 1]} // Use the correct video URL
          title="Video Player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <img src={videos[index - 1]} alt="Displayed Image" className="image-fluid" style={imageStyle} />
      )}
    </div>
  );
}

const imageStyle: React.CSSProperties = {
  width: "500px",
  height: "300px",
  objectFit: "fill",
  margin:"10px"
};


const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center", // Center horizontally
  alignItems: "center", // Center vertically
  height: "100%", // Full viewport height
};

const iframeStyle: React.CSSProperties = {
  width: "40vw", // 80% of viewport width
  height: "45vw", // Maintain 16:9 aspect ratio
  maxWidth: "40vw", // Limit max width
  maxHeight: "450px", // Limit max height
  margin: "20px",
  border: "none",
};