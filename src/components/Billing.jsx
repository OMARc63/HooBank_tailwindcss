import React from "react";
import styles, { layout } from "../style";
import { bill, google, apple } from "../assets";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img
        className="w-full h-full relative z-[5] object-contain"
        src={bill}
        alt="bill"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />
    </div>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} mt-6 max-w-[470px]`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className={`${styles.flexStart} flex-wrap sm:mt-10 mt-6`}>
        <img
          className="mr-8 cursor-pointer min-h-[45px]"
          src={apple}
          alt="apple"
        />
        <img
          className="cursor-pointer min-h-[45px]"
          src={google}
          alt="google"
        />
      </div>
    </div>
  </section>
);

export default Billing;
