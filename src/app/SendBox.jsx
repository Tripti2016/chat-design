import React from "react";

const SendBox = ({ images, content }) => {
  return (
    <div className="send-box">
      <div className="chat-img">
         {images.map((src, index) => (
          <img key={index} src={src} alt="dog" width={50} height={50} />
        ))}
      </div>
      <div className="send-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SendBox;
