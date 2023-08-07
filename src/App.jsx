import React from "react";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div
      className={`${styles.paddingX} ${styles.flexCenter} fixed w-full z-50`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`${styles.flexStart} pt-20`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
