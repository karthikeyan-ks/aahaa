import "./YinYang.css";

const YinYang = () => {
    return (
        <div className="chat-container">
            <div className="message-box left">
                <p>Hello, this is a message!</p>
            </div>
            <div className="message-box right">
                <p>Hey, I see your message!</p>
            </div>
        </div>
    );
};

export default YinYang;
