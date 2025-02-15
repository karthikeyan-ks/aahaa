import "./YinYang.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const YinYang = () => {
    return (
        <div className="chat-container col-12 col-md-4">
            <div className="message-box left w-75">
                <p>Hello, this is a message!</p>
            </div>
            <div className="message-box right w-75">
                <p>Hey, I see your message!</p>
            </div>
        </div>
    );
};

export default YinYang;
