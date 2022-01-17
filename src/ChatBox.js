import { faPaperPlane, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./ChatBox.css";

function ChatBox({ chatOpen, setChatOpen }) {
  const [messageText, setMessageText] = useState("");
  return (
    <div className="chatBox">
      <div className="chatHeader">
        <div
          className="chatHeader__back"
          onClick={() => setChatOpen(!chatOpen)}
        >
          <FontAwesomeIcon className="chat__back" icon={faTimesCircle} />
        </div>
        <div className="chatHeader__title">Chat Area</div>
      </div>
      <div className="chatBody">
        <h1>Hii</h1>
      </div>
      <div className="chatSendMessage">
        <div className="chat__typeMessages">
          <input
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <FontAwesomeIcon className="chat__sendMessage" icon={faPaperPlane} />
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
