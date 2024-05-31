import React, { useState, useEffect } from "react";
import BannerSlider from "./BannerSlider";
import HomeSectionMenu from "./HomeSectionMenu";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import { useSelector } from "react-redux";
import { selectSelectedSport } from "./sportsSlice";

function HomeMiddle() {
const [selectedSection, setSelectedSection] = useState(4);
  const selectedSport = useSelector(selectSelectedSport);

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };

  const sectionComponents = {
    1: <HomeSection1 />,
    2: <HomeSection2 />,
    3: <HomeSection3 />,
    4: <HomeSection4 selectedSport={selectedSport} />,
  };

  const competitionsData = useSelector((state) => state.competitions.data);

  useEffect(() => {
    console.log("Competitions Data:", competitionsData);
  }, [competitionsData]);

  return (
    <div className="home-middle">
        <HomeSectionMenu
        sections={[
          { id: 1, label: "Highlights" },
          { id: 2, label: "Upcoming" },
          { id: 3, label: "Tomorrow" },
          { id: 4, label: "Countries" },
        ]}
        selectedSection={selectedSection}
        onSelect={handleSectionSelect}
      />
      <BannerSlider />
      <div className="section-content">
        {/* Render the selected section component */}
        {sectionComponents[selectedSection]}
      </div>
    </div>
  );
}

export default HomeMiddle;
