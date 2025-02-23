const images = [
    "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg",
    "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
    "https://images.pexels.com/photos/6483589/pexels-photo-6483589.jpeg",
    "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
  ];
  
  export default function ImageGrid() {
    return (
      <div style={containerStyle}>
        <div style={gridStyle}>
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                ...getGridSpan(index),
                ...imageContainerStyle,
              }}
            >
              <img src={src} alt={`img-${index}`} style={imageStyle} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    height: "100%", // Full viewport height
  };
  
  
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 100px)",
    gridTemplateRows: "repeat(3, 100px)",
    gap: "10px",
    width: "330px",
    gridAutoFlow: "dense",
  };
  
  const imageContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };
  
  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "all 0.5s ease",
  };
  
  // Function to handle grid span logic
  const getGridSpan = (index: number): React.CSSProperties => {
    if (index === 0) {
      return { gridColumn: "span 2", gridRow: "span 2" }; // First image 2x larger
    }
    return { gridColumn: "span 1", gridRow: "span 1" }; // Others stay the same
  };
  