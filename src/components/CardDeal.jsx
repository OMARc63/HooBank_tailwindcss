import React from "react";
import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="lg:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} mt-6 max-w-[550px]`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles={"mt-10"} />
    </div>
    <div className={layout.sectionImg}>
      <img
        className="w-full h-full object-contain"
        src={card}
        alt="card_deal"
      />
    </div>
  </section>
);

export default CardDeal;
