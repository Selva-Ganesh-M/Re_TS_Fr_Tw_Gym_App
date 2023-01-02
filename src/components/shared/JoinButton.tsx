import { Sections } from "@/shared/types";
import React from "react";
import { Link } from "react-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedSection: (value: Sections) => void;
};

const JoinButton = ({ children, setSelectedSection }: Props) => {
  return (
    <Link
      className="bg-secondary-400 hover:bg-primary-500 hover:text-white px-10 py-2 rounded-md"
      to={`${Sections.ContactUs}`}
      duration={700}
      offset={-88}
      smooth={true}
      onClick={() => {
        setSelectedSection(Sections.ContactUs);
      }}
    >
      {children}
    </Link>
  );
};

export default JoinButton;
