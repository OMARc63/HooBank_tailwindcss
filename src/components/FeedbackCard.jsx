import styles from "../style";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div
    className={`${styles.flexStart} flex-col justify-between py-12 px-10 max-w-[380px] rounded-lg feedback-card md:mr-5 mr-0 my-5`}
  >
    <img className="w-11" src={quotes} alt="quotes" />

    <p className={`${styles.paragraph} my-6`}>{content}</p>

    <div className={`${styles.flexCenter}`}>
      <div className="w-[48px] h-[48px] rounded-full">
        <img
          className="w-full h-full object-contain"
          src={img}
          alt="feedback_img"
        />
      </div>
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-medium text-white text-xl leading-8">
          {name}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-base leading-6">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
