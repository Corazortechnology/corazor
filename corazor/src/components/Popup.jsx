import React from "react";
import "./popupStyles.scss";
import Xicon from "../../public/x-button.svg";

const Popup = ({ title, content, onClose }) => {
  return (
    <div className="popup" onClick={onClose}>
      <div className="popup-inner" onClick={(e) => e.stopPropagation()}>
        <div className="close-btn" onClick={onClose}>
          <img src={Xicon} alt="Close" />
        </div>
        <h2 className="text-center text-3xl text-[#f8f9fa] font-bold mb-5">
          {title}
          <hr className="mt-1 border-t-[1px] border-[#f4f3ee]" />
        </h2>
        <div className="max-w-[90%] text-[#6c757d] text-bold text-center mb-5">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Popup;
