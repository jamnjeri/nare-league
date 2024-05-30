import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Britain from "../images/uk-flag.svg";
import Spain from "../images/spain-flag.svg";
import Kenya from "../images/kenya-flag.svg";
import Italy from "../images/italy-flag.svg";
import TabLabel from "../components/TabLabel";
// import Competitions from "./Competitions";
import { useDispatch } from "react-redux";
import { fetchCompetitions } from "./competitionsSlice";

function LeftColumn() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "English", value: "1", src: Britain, alt: "English" },
    { label: "Spanish", value: "2", src: Spain, alt: "Spanish" },
    { label: "Kenyan", value: "3", src: Kenya, alt: "Kenyan" },
    { label: "Italian", value: "4", src: Italy, alt: "Italian" },
  ];

  const dispatch = useDispatch();
  // const competitions = useSelector((state) => state.competitions);

  useEffect(() => {
    dispatch(fetchCompetitions());
  }, [dispatch]);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={
                  <TabLabel src={tab.src} alt={tab.alt} label={tab.label} />
                }
                value={tab.value}
              />
            ))}
          </TabList>
        </Box>
        {tabs.map((tab) => (
          <TabPanel key={tab.value} value={tab.value}>
            {`Item ${tab.value}`}
          </TabPanel>
        ))}
      </TabContext>
      {/* <div>
        {competitions.loading ? (
          <div>Loading...</div>
        ) : competitions.error ? (
          <div>Error: {competitions.error}</div>
        ) : (
          <Competitions competitions={competitions.data} />
        )}
      </div> */}
    </Box>
  );
}

export default LeftColumn;
