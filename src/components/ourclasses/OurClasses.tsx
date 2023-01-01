import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { DataType, Sections } from "@/shared/types";
import Class from "./Class";
import Heading from "../shared/Heading";
import { motion } from "framer-motion";
import { data } from "@/shared/data";

type Props = {
  setSelectedSection: (value: Sections) => void;
};

const OurClasses = ({ setSelectedSection }: Props) => {
  return (
    <motion.section
      id="ourclasses"
      onViewportEnter={() => setSelectedSection(Sections.OurClasses)}
      className="outclasses p-16 bg-primary-300 flex flex-col gap-4 "
    >
      {/* CONTENT SECTION */}
      <div className="text-center flex flex-col gap-4 items-center mb-4">
        <Heading>Our Classes</Heading>
        <p className="w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          accusantium aliquam vitae quidem cumque consequuntur temporibus
          explicabo repellendus et repellat laborum, consequatur atque minus
          ipsum quos impedit tempore unde eveniet?
        </p>
      </div>
      {/* COROUSEL SECTION */}
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Carousel
          autoPlay={true}
          autoPlaySpeed={2500}
          transitionDuration={1000}
          infinite={true}
          responsive={{
            large: {
              breakpoint: { max: 4000, min: 1440 },
              items: 4,
            },
            medium: {
              breakpoint: { max: 1440, min: 1060 },
              items: 3,
            },
            small: {
              breakpoint: { max: 1060, min: 600 },
              items: 2,
            },
            xs: {
              breakpoint: { min: 0, max: 600 },
              items: 1,
            },
          }}
        >
          {data.map((item) => (
            <>
              <Class data={item} key={`${item.name}`} />
            </>
          ))}
        </Carousel>
      </motion.div>
    </motion.section>
  );
};

export default OurClasses;
