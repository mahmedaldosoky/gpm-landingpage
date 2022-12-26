import React from "react";

const CTAButton = (props) => {
  return (
    <button className="mt-10 bg-gradient-to-r from-[#5ED3D0] to-[#8750F3] text-white px-5 lg:px-10 py-3 lg:py-5 rounded-xl text-[16px] lg:text-lg font-bold">
      {props.text}
    </button>
  );
};

export default CTAButton;
