import { Sections } from "@/shared/types";
import { motion } from "framer-motion";
import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className=" p-16 bg-primary-300 flex flex-col justify-between gap-10 md:flex-row">
      {/* part-1 */}
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        viewport={{
          amount: 0.5,
          once: true,
        }}
        variants={{
          hidden: {
            opacity: 0,
            x: -100,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        className="basis-1/2 flex flex-col gap-3"
      >
        <img alt="logo" src={Logo} className="self-start" />
        <p className="">
          Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
          purus et arcu massa dictum condimentum. Augue scelerisque iaculis orci
          ut habitant laoreet. Iaculis tristique.
        </p>
        <p>© Evogym All Rights Reserved.</p>
      </motion.div>
      {/* part-2 */}
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        viewport={{
          amount: 0.5,
          once: true,
        }}
        variants={{
          hidden: {
            opacity: 0,
            x: -100,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        className="flex flex-col xs:flex-row gap-5 md:flex-row"
      >
        {/* part-2-1 */}
        <div className="basis-1/2">
          <h4 className="font-bold mb-3">Links</h4>
          <p className="">Massa orci senectus</p>
          <p className="">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        {/* part-2-2 */}
        <div className="basis-1/2">
          <h4 className="font-bold mb-3">Contact Us</h4>
          <p className="">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
