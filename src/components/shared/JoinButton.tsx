import { Sections } from "@/shared/types";
import React from "react";

type Props = {
  children: React.ReactNode;
  setSelectedSection: (value: Sections) => void;
};

const JoinButton = ({ children, setSelectedSection }: Props) => {
  return (
    <a
      className="bg-secondary-400 hover:bg-primary-500 hover:text-white px-10 py-2 rounded-md"
      href={`#${Sections.ContactUs}`}
      onClick={() => {
        setSelectedSection(Sections.ContactUs);
      }}
    >
      {children}
    </a>
  );
};

export default JoinButton;
