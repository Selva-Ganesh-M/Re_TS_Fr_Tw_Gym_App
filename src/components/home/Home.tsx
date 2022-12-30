import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import homeImg from "@/assets/HomePageGraphic.png";
import homeText from "@/assets/HomePageText.png";
import JoinButton from "@/components/shared/JoinButton";
import { Sections } from "@/shared/types";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

type Props = {
  setSelectedSection: (value: Sections) => void;
};

const Home = ({ setSelectedSection }: Props) => {
  const isAboveMobileScreens = useMediaQuery("(min-width: 1060px)");
  const wrapperClasses = isAboveMobileScreens
    ? "pt-32 px-6 md:flex items-center gap-16 md:pb-0"
    : "pt-32 px-6 flex-col items-center";
  return (
    <section id="home" className="h-auto bg-gray-20">
      <div className={`wrapper ${wrapperClasses}`}>
        {/* LEFT SIDE */}
        <div className="z-100 xs:flex xs:flex-col xs:text-center xs:items-center md:items-start md:text-start">
          {/* image */}
          <div className="img-div relative z-10">
            <div className="before:absolute flex xs:justify-center md:justify-start before:z-[-1] md:before:content-evolvetext before:-top-20 before:-left-10">
              <img src={homeText} alt="home-text-img" />
            </div>
          </div>
          {/* content */}
          <div className="content-div">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </div>
          {/* buttons */}
          <div className="actions-div mt-5 flex items-center xs:justify-center gap-10">
            <JoinButton setSelectedSection={setSelectedSection}>
              Join Now
            </JoinButton>
            <a
              href="#"
              className="underline text-sm text-primary-500 font-bold hover:text-secondary-500"
            >
              Read More
            </a>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div>
          <img src={homeImg} alt="home-img" />
        </div>
      </div>
      {/* SPONSORS */}
      <div className="sponsors flex xs:flex-col sm:justify-center sm:flex-row xs:px-10 md:px-20 bg-primary-100 sm:gap-16 md:justify-between py-10 xs:gap-10">
        <img src={SponsorForbes} alt="sponsor-forbes" className="self-center" />
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
    </section>
  );
};

export default Home;
