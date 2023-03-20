import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row w-full p-5 my-1 rounded-2xl feature-card max-w-[500px] `}
  >
    <div
      className={`shrink-0 w-[64px] h-[64px] ${styles.flexCenter} rounded-full bg-dimBlue p-0`}
    >
      <img className="w-[50%] h-[50%]" src={icon} alt="feature icon" />
    </div>
    <div className="flex-1 flex flex-col ml-5">
      <h4 className={`font-poppins font-medium text-[18px] mb-1 text-white`}>
        {title}
      </h4>
      <p className={`font-poppins text-dimWhite text-[16px] leading-6`}>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h1 className={`${styles.heading2}`}>
        You do the business,
        <br className="sm:block hidden" /> we'll handle the money.
      </h1>
      <p className={`${styles.paragraph} max-w-[540px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg} flex-col md:items-end`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
