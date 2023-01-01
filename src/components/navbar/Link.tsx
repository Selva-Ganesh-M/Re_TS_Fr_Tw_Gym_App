import { Sections } from "@/shared/types";
import { Link as ScrollableLink } from "react-scroll";

type Props = {
  section: string;
  selectedSection: Sections;
  setIsMobileMenuToggled: (arg: Boolean) => void;
  setSelectedSection: (arg0: Sections) => void;
};

const Link = ({
  section,
  selectedSection,
  setSelectedSection,
  setIsMobileMenuToggled,
}: Props): JSX.Element => {
  const sectionLowerC = section.toLowerCase().replace(/ /g, "") as Sections;

  return (
    <ScrollableLink
      to={`${sectionLowerC}`}
      duration={700}
      offset={-88}
      smooth={true}
      className={`${
        selectedSection === sectionLowerC ? "text-primary-500" : ""
      } hover:text-primary-300 `}
      href={`#${sectionLowerC}`}
      onClick={() => {
        setIsMobileMenuToggled(false);
        setSelectedSection(sectionLowerC);
      }}
    >
      {section}
    </ScrollableLink>
  );
};

export default Link;
