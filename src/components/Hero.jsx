import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "../components/GetStarted";

const Hero = () => (
  <section className={`flex flex-col md:flex-row ${styles.paddingX}`} id="home">
    <div
      className={`flex-1 flex-col ${styles.flexStart} xl:px-0 px-6 ms:my-0 my-10`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img className="w-[32px] h-[32px]" src={discount} alt="discount" />
        <p className={`${styles.paragraph} ml-2 uppercase`}>
          <span className="text-white"> 20% </span> Discount For
          <span className="text-white"> 1 Month </span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] text-white sm:leading-[100px] leading-[75px] mr-0 ss:mr-6">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 ">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold sm:text-[68px] text-[52px] text-white sm:leading-[100px] leading-[75px] w-full">
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className={`${styles.flexCenter} flex-1 ms:my-0 my-10 relative`}>
      <img
        className="w-[100%] h-[100%] object-contain relative z-[5] "
        src={robot}
        alt="robot"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] button-0 white__gradient rounded-full" />
      <div className="absolute z-[1] w-[50%] h-[50%] button-20 right-20 blue__gradient" />
    </div>
    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>
  </section>
);
export default Hero;
