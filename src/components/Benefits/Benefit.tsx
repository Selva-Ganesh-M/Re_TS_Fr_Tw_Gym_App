import { BenefitType, Sections } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  benefit: BenefitType;
  setSelectedSection: (value: Sections) => void;
};

const Benefit = ({ benefit, setSelectedSection }: Props) => {
  const { title, icon, description } = benefit;
  return (
    <motion.div
      className=" text-center justify-between border-2 flex flex-col gap-5 py-6 px-4 rounded-md border-gray-100 mb-6 basis-[31%]"
      viewport={{
        once: true,
        amount: 0.5,
      }}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="bg-primary-300 w-12 h-12 justify-center flex items-center rounded-full mx-auto">
        {icon}
      </div>
      <div className="font-montserrat font-bold">{title}</div>
      <p className="text-sm">{description}</p>
      <a
        href="#"
        className="underline text-sm text-primary-500 font-bold hover:text-secondary-500"
      >
        Read More
      </a>
    </motion.div>
  );
};

export default Benefit;
