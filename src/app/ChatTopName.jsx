import React from "react";
import Image from "next/image";
import imgName from "../../public/images/avatar.jpg";
import { AiOutlineEllipsis } from "react-icons/ai";

const ChatTopName = ({ name, status }) => {
  return (
    <div className="chat-top-name">
      <div className="icon">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            points="7 2 17 12 7 22"
            transform="matrix(-1 0 0 1 24 0)"
          ></polyline>
        </svg>
      </div>
      <Image src={imgName} alt="img" width={50} height={50} />
      <div className="detail">
        <h3>{name}</h3>
        <p>{status}</p>
      </div>
      <div className="more">
        <AiOutlineEllipsis />
      </div>
    </div>
  );
};

export default ChatTopName;
