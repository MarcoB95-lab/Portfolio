import { useState, useEffect } from "react";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import Landing from "./scenes/Landing"
import useMediaQuery from "./hooks/useMediaQuery";
import LineGradient from "./components/LineGradient"
import Navbar from "./scenes/Navbar"

function App() {
  //state that determines which part of the website we on
  const [selectedPage, setSelectedPage] = useState('home');
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (<div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
       <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
        </div>
  </div>
  );
}

export default App;
