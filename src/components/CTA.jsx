import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.paddingY} sm:text-left text-center`}>
    <div
      className={`flex justify-between items-center sm:flex-row flex-col bg-black-gradient w-full md:py-16 md:px-24 p-12 rounded-[20px]`}
    >
      <div className="w-full sm:mr-10 mr-0">
        <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Button styles={"shrink-0 sm:mt-0 mt-10"} />
    </div>
  </section>
);

export default CTA;
