import React, { useState } from "react";
import BannerSlider from "./BannerSlider";
import HomeSectionMenu from "./HomeSectionMenu";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";

const sections = [
  { id: 1, label: "Highlights", component: <HomeSection1 /> },
  { id: 2, label: "Upcoming", component: <HomeSection2 /> },
  { id: 3, label: "Tomorrow", component: <HomeSection3 /> },
  { id: 4, label: "Countries", component: <HomeSection4 /> },
];

function HomeMiddle() {
    const [selectedSection, setSelectedSection] = useState(sections[0].id); 

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="home-middle">
      <HomeSectionMenu sections={sections} selectedSection={selectedSection} onSelect={handleSectionSelect} />
      <BannerSlider />
      <div className="section-content">
        {sections.map((section) => (
          <div
            key={section.id}
            style={{
              display: section.id === selectedSection ? "block" : "none",
            }}
          >
            {section.component}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeMiddle;
