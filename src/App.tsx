import { useState } from "react";
import Navbar from "@/components/navbar/Index";
import { useEffect } from "react";
import { Sections } from "./shared/types";
import Home from "./components/home/Home";
import Benefits from "./components/Benefits/Benefits";
import OurClasses from "./components/ourclasses/OurClasses";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/footer/Footer";

function App() {
  // STATE DECLARATION
  const [selectedSection, setSelectedSection] = useState<Sections>(
    Sections.Home
  );
  const [isTopOfThePage, setIsTopOfThePage] = useState<Boolean>(true);
  useEffect(() => {
    setSelectedSection(Sections.Home);
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfThePage(true);
        // setSelectedSection(Sections.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfThePage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="app">
      <Navbar
        isTopOfThePage={isTopOfThePage}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <Home setSelectedSection={setSelectedSection} />
      <Benefits setSelectedSection={setSelectedSection} />
      <OurClasses setSelectedSection={setSelectedSection} />
      <ContactUs setSelectedSection={setSelectedSection} />
      <Footer />
    </div>
  );
}

export default App;
