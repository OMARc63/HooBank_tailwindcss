import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className={`w-full ${styles.flexCenter} md:flex-row flex-col z-[1]`}>
      <h2 className={`${styles.heading2} flex-1 mr-6`}>
        What people are <br className="md:block hidden" /> saying about us
      </h2>
      <div className={`flex-1 ${styles.flexCenter} md:mt-0 mt-6`}>
        <p className={`${styles.paragraph} max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div
      className={`flex w-full sm:justify-between justify-center flex-wrap sm:mt-16 mt-8 z-[1]`}
    >
      {feedback.map((feed, index) => (
        <FeedbackCard key={feed.id} {...feed} index={index} />
      ))}
    </div>
    <div
      className={`absolute z-[0] -right-1/2 top-0 w-[60%] h-[80%] rounded-[200px]  blue__gradient`}
    />
  </section>
);

export default Testimonials;
