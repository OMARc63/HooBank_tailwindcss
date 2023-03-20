import React from "react";

const Button = ({ styles }) => (
  <div
    className={`font-poppins font-medium text-[18px] text-primary cursor-pointer outline-none bg-blue-gradient py-4 px-6 rounded-lg ${styles}`}
  >
    Get Started
  </div>
);

export default Button;
