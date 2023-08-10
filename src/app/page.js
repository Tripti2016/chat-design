import Image from "next/image";
import ChatTopName from "./ChatTopName";
import ChatContent from "./ChatContent";

const home = () => {
  const chatTopNames = [
    { name: "Samuel Green", status: "Available to Talk" },
    // ... other chat top name data
  ];

  return (
    
    <div className="container">
      <div class="u-shape-top"></div>

      <div className="chat-box">
        <div className="chat-box-main">
          {chatTopNames.map((item, index) => (
            <ChatTopName key={index} name={item.name} status={item.status} />
          ))}
          <ChatContent />
          <div className="answer-box">
            <div className="form">
              <input type="text" placeholder="Type a message" />
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <h1>Simple booking</h1>
        <p>
          Stay in touch with our dog walkers through the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can rate your walker and book again all through
          the chat.
        </p>
      </div>
      <div class="u-shape-bottom"></div>
    </div>
  );
};

export default home;
