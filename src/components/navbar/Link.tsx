import { Sections } from "@/shared/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  section: string;
  selectedSection: Sections;
  setSelectedSection: (arg0: Sections) => void;
};

const Link = ({ section, selectedSection, setSelectedSection }: Props) => {
  const sectionLowerC = section.toLowerCase().replace(/ /g, "") as Sections;

  return (
    <a
      className={`${
        selectedSection === sectionLowerC ? "text-primary-500" : ""
      } hover:text-primary-300 `}
      href={`#${section}`}
      onClick={() => {
        setSelectedSection(sectionLowerC);
      }}
    >
      {section}
    </a>
  );
};

export default Link;
