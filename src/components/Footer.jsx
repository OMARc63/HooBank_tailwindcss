import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`bg-[#0B0A0C] ${styles.paddingX} ${styles.flexCenter}`}>
    <div
      className={`${styles.flexCenter} flex-col ${styles.paddingY} ${styles.boxWidth}`}
    >
      <div className={`${styles.flexStart} w-full md:flex-row flex-col mb-8`}>
        <div className={`flex-1 flex flex-col justify-start mr-10`}>
          <img className="w-[250px] object-contain" src={logo} alt="hoobank" />
          <p className={`${styles.paragraph} max-w-[350px] mt-6`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex justify-between items-start flex-wrap md:mt-0 mt-10">
          {footerLinks.map((links, index) => (
            <div
              key={index + links.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-lg leading-7 text-white mb-6">
                {links.title}
              </h4>
              <ul className="list-none">
                {links.links.map((link, index) => (
                  <li
                    className={`font-poppins font-normal text-base text-dimWhite hover:text-secondary ${
                      index !== links.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <a className=" no-underline" href={link.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`w-full flex justify-between items-center sm:flex-row flex-col pt-6 border-t-[1px] border-[#3F3E45]`}
      >
        <p className="font-poppins font-medium text-lg text-dimWhite sm:mb-0 mb-4">
          2021 HooBank. All Rights Reserved.
        </p>
        <div className={`${styles.flexCenter}`}>
          {socialMedia.map((social, index) => (
            <div
              key={social.id}
              className={`w-[21px] h-[21px] cursor-pointer ${
                index !== social.length - 1 ? "mr-6" : "mr-0"
              }`}
            >
              <img
                className="w-full h-full object-contain"
                src={social.icon}
                alt="social_media"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
