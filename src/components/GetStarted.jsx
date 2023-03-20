import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} bg-blue-gradient w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins medium text-[18px] leading-[23px] mr-2">
          {" "}
          <span className="text-gradient">Get</span>{" "}
        </p>
        <img
          className="w-[23px] h-[23px] object-contain"
          src={arrowUp}
          alt="arrow up"
        />
      </div>
      <p className="text-gradient font-poppins medium text-[18px] leading-[23px]">
        Started
      </p>
    </div>
  </div>
);

export default GetStarted;
