import { BenefitType, Sections } from "@/shared/types";
import BenefitsPageGrpahic from "@/assets/BenefitsPageGraphic.png";
import Heading from "../shared/Heading";
import Benefit from "./Benefit";
import { motion } from "framer-motion";
import JoinButton from "../shared/JoinButton";
import { benefits } from "@/shared/data";

type Props = {
  setSelectedSection: (value: Sections) => void;
};

const Benefits = ({ setSelectedSection }: Props) => {
  return (
    <motion.section
      onViewportEnter={() => setSelectedSection(Sections.Benefits)}
      id="benefits"
      className="mt-10 p-10 xs:flex xs:flex-col gap-24"
    >
      {/* TOP WRAPPER */}
      <div className="top-wrapper text-center">
        <div className="header mb-3">
          <Heading> MORE THAN JUST GYM.</Heading>
          <p className="text-sm mb-10 mt-5">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>
        {/* Benefits wrapper */}
        <motion.div
          className="flex md:justify-between xs:flex-col md:flex-row"
          initial="hidden"
          whileInView={"visible"}
          viewport={{
            // once: true,
            amount: 0.5,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              benefit={benefit}
              setSelectedSection={setSelectedSection}
            />
          ))}
        </motion.div>
      </div>

      {/* BOTTOM WRAPPER */}
      <div className="Bottom-wrapper xs:flex xs:flex-col xs:gap-16 md:gap-10 md:flex-row md:items-center">
        {/* LEFT */}
        <div className="basis-[100%] xs:m-auto">
          <img src={BenefitsPageGrpahic} alt="benefits-image" />
        </div>

        {/* RIGHT */}
        <motion.div
          className="p-6 text-start"
          initial="hidden"
          whileInView={"visible"}
          transition={{ duration: 0.5 }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          variants={{
            hidden: {
              opacity: 0,
              x: 100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <div className="relative">
            <div className="before:absolute before:content-abstractwaves before:-top-20 before:-left-20">
              <Heading>
                MILLIONS OF HAPPY MEMBERS GETTING{" "}
                <span className="text-primary-500">FIT</span>
              </Heading>
            </div>
          </div>
          <p className="my-5">
            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
            ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
            vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat
            sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
            pretium sapien proin integer nisl. Felis orci diam odio.
          </p>
          <p className="mb-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
          {/* action button */}
          <motion.div
            className="xs:mt-16 md:mt-10"
            initial="hidden"
            whileInView={"visible"}
            transition={{ duration: 0.5 }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: 100,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <div className="relative inline">
              <div className="inline before:content-sparkles before:absolute before:left-24 before:-top-10 before:z-[-1]">
                <JoinButton setSelectedSection={setSelectedSection}>
                  Join Now
                </JoinButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Benefits;
