import React from "react";
import Image from "next/image";

const RecvBox = ({ images, content }) => {
  return (
    <div className="recv-box">
      <div className="chat-img">
        {images.map((src, index) => (
          <img key={index} src={src} alt="dog" width={50} height={50} />
        ))}
      </div>
      <div className="recv-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default RecvBox;
