import React from "react";
import { FiCircle } from "react-icons/fi";

const PromoBox = () => {
  return (
    <div className="send-box promo-box">
      <div>
        <p className="promo-detail">
          <span className="circle-icon">
            <FiCircle />
          </span>
          30 minute walk
          <span className="price"> $29</span>
        </p>
        <p className="promo-detail">
          <span className="circle-icon">
            <FiCircle />
          </span>
          1 hour walk
          <span className="price"> $49</span>
        </p>
      </div>
    </div>
  );
};

export default PromoBox;
