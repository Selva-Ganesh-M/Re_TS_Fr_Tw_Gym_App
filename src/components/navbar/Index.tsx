import Logo from "@/assets/Logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Sections } from "@/shared/types";
import Link from "./Link";
import JoinButton from "@/components/shared/JoinButton";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  isTopOfThePage: Boolean;
  selectedSection: Sections;
  setSelectedSection: (string: Sections) => void;
};

const Navbar = ({
  isTopOfThePage,
  selectedSection,
  setSelectedSection,
}: Props) => {
  //DECLARATIONS
  const navNames: string[] = ["Home", "Benefits", "Our Classes", "Contact Us"];
  const [isMobileMenuToggled, setIsMobileMenuToggled] =
    useState<Boolean>(false);
  // return whether we're above the medium screen size
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

  //   CUSTOM STYLES
  const flexBetween = "flex items-center justify-between";
  const navBg = !isTopOfThePage ? "bg-primary-100" : "bg-gray-20";

  //ACTUAL RETURN
  return (
    <nav className={`${navBg} py-6 sticky top-0 z-30 w-full`}>
      <div className={`${flexBetween} w-[95%] gap-16 mx-auto`}>
        {/* LEFT SIDE */}
        <div>
          <img src={Logo} alt="logo" />
        </div>
        {/* RIGHT SIDE */}
        {isAboveMediumScreens ? (
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              {navNames.map((name, index) => (
                <Link
                  key={`${index}-${name}`}
                  section={name}
                  selectedSection={selectedSection}
                  setSelectedSection={setSelectedSection}
                  setIsMobileMenuToggled={setIsMobileMenuToggled}
                />
              ))}
            </div>
            <div className={`${flexBetween} gap-8`}>
              <p>Sign In</p>
              <JoinButton setSelectedSection={setSelectedSection}>
                Become a member
              </JoinButton>
            </div>
          </div>
        ) : (
          <>
            <button
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
              className="rounded-full p-2 bg-secondary-500"
            >
              <Bars3Icon className="text-white h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* SMALL SCREENS NAVIGATION MENU MODAL */}
      {!isAboveMediumScreens && isMobileMenuToggled && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          className="fixed z-100 top-0 px-3 pt-6 right-0 bg-secondary-500 w-[300px] h-full"
        >
          {/* CLOSE BUTTON (X) */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
              className=" rounder-full p-2 mr-16"
            >
              <XMarkIcon className=" w-6 h-6" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="ml-[23%] flex flex-col text-2xl gap-3 basis-1/3">
            {navNames.map((name, index) => (
              <Link
                section={name}
                key={`${index}-${name}`}
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                setIsMobileMenuToggled={setIsMobileMenuToggled}
              />
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
