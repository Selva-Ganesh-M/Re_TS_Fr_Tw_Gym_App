import useMediaQuery from "@/hooks/useMediaQuery";
import homeImg from "@/assets/HomePageGraphic.png";
import homeText from "@/assets/HomePageText.png";
import JoinButton from "@/components/shared/JoinButton";
import { Sections } from "@/shared/types";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";
type Props = {
  setSelectedSection: (value: Sections) => void;
};

const Home = ({ setSelectedSection }: Props) => {
  const isAboveMobileScreens = useMediaQuery("(min-width: 768px)");
  const wrapperClasses = isAboveMobileScreens
    ? "p-[120px] px-6 md:flex gap-16 md:pb-0"
    : "pt-1 px-6 flex-col items-center";
  return (
    <section id="home" className="min-h-full bg-gray-20 ">
      {/* MAIN */}
      <div className={`wrapper ${wrapperClasses}`}>
        {/* LEFT SIDE */}
        <motion.div
          className="z-100 xs:w-5/ md:w-full text-center xs:m-auto xs:flex xs:flex-col xs:text-center xs:items-center md:items-start md:text-start"
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* image */}
          <div className="img-div relative z-10 xs:mb-6">
            <div
              className="
            // before
            before:absolute before:z-[-1] md:before:content-evolvetext before:-top-20 before:-left-10
            // very small
            flex justify-center 
            // small
            xs:justify-center 
            // mediun
            md:justify-start "
            >
              <img
                src={homeText}
                className="
                // very small
                ml-10
                mb-6
                // small
                xs:ml-16
                xs:mb-0
                // medium
                md:ml-auto"
                alt="home-text-img"
              />
            </div>
          </div>
          {/* content */}
          <div className="content-div">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </div>
          {/* buttons */}
          <motion.div
            className="actions-div flex items-center justify-center sm:justify-start gap-10 mt-10"
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span>
              <JoinButton setSelectedSection={setSelectedSection}>
                Join Now
              </JoinButton>
            </span>
            <a
              href="#"
              className="underline text-sm text-primary-500 font-bold hover:text-secondary-500"
            >
              Read More
            </a>
          </motion.div>
        </motion.div>
        {/* RIGHT SIDE */}
        <div className="xs:flex xs:justify-center md:static basis-1/2">
          <img src={homeImg} alt="home-img" className="" />
        </div>
      </div>
      {/* SPONSORS */}
      {isAboveMobileScreens ? (
        <div className="sponsors mb-5 flex xs:flex-col sm:justify-center sm:flex-row xs:px-10 md:px-20 bg-primary-100 sm:gap-16 md:justify-around py-10 xs:gap-10">
          <img
            src={SponsorForbes}
            alt="sponsor-forbes"
            className="self-center"
          />
          <img
            src={SponsorFortune}
            alt="sponsor-fortune"
            className="self-center"
          />
          <img
            src={SponsorRedBull}
            alt="sponsor-redbull"
            className="self-center"
          />
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Home;
