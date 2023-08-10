import React from "react";
import SendBox from "./SendBox";
import RecvBox from "./RecvBox";
import { FiCircle } from "react-icons/fi";

import PromoBox from "./Promo";

const ChatContent = () => {
  const sendContent = [
    {
      images: [],
      content: "pointshat sounds great. I’d be happy with that.",
    },
    {
      images: [],
      content: "Could you send over some pictures of your dog, please?",
    },
  ];

  const recvContent = [
    {
      images: ["/images/dog-1.jpg", "/images/dog-2.jpg", "/images/dog-3.jpg"], // Replace with actual image URLs
      content: "Here are a few pictures. She’s a happy girl!",
    },
    {
      images: [],
      content: "Can you make it?",
    },
  ];

  return (
    <div className="chat-content">
      {sendContent.map(({ images, content }, index) => (
        <SendBox key={index} content={content} images={images} />
      ))}
      {recvContent.map(({ images, content }, index) => (
        <RecvBox key={index} images={images} content={content} />
      ))}

      <PromoBox />
    </div>
  );
};

export default ChatContent;
