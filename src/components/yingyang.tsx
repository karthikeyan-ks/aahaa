import "./YinYang.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center', // Horizontally center the div
        alignItems: 'center',     // Vertically center the div
        minHeight: '200px',       // Ensure a minimum height for centering to work
        backgroundColor: 'lightgray', // Optional background for the container
        padding: '20px' // Add some padding around the shape
    },
    curvedDiv: {
        backgroundColor: 'teal', // Background color of the shape
        borderRadius: '20px',    // Adjust for desired roundness
        padding: '20px',         // Padding within the shape
        display: 'flex',          // Use flexbox for horizontal arrangement
        gap: '20px',             // Spacing between the text blocks
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
    },
    content: {
        backgroundColor: 'white', // Background color for text sections
        borderRadius: '15px',    // Rounded corners for text sections
        padding: '15px 20px',     // Padding within text sections
        textAlign: 'center',      // Center text horizontally
        flex: 1,                 // Equal width for both content blocks
        minWidth: '150px'        // Ensure a minimum width for the content blocks
    },
    text: {
        color: 'black',          // Text color
        fontWeight: 'bold',      // Make the text bold
        marginBottom: '10px',   // Space between lines of text
        fontFamily: 'sans-serif' // Example font family
    }
};

const YinYang = () => {
    return (
        <div className="yinyang">
            <div className="yin"><h5>this is a message</h5></div>
            <div className="yang"><h5>this is a message</h5></div>
        </div>
    );
};

export default YinYang;
