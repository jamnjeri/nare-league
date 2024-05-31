import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompetitions } from "./competitionsSlice";
import { selectSport } from "./sportsSlice";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HomeLeft = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.competitions);
  const [soccerExpanded, setSoccerExpanded] = useState(false);

  useEffect(() => {
    dispatch(fetchCompetitions());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Check if there is data
  if (!data || !data.all_sports) {
    return <div>No sports available</div>;
  }

  // const baseUrl = "https://api.betnare.com/v1";

  const handleSportClick = (sport) => {
    console.log("Dispatching selectSport action with sport:", sport);
    dispatch(selectSport(sport));
    if (sport.sport_name === "Soccer") {
      setSoccerExpanded(!soccerExpanded); 
    } else {
      dispatch(selectSport(sport));
    }
  };

  return (
    <div>
      {data.all_sports.map((sport, index) => (
        <Accordion
          key={index}
          expanded={sport.sport_name === "Soccer" ? soccerExpanded : false}
          sx={{
            backgroundColor: "#16202C",
            color: "white",
            border: "none",
            boxShadow: "none",
            minHeight: "20px",
          }}
          onClick={() => handleSportClick(sport)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{ backgroundColor: "none", border: "none" }}
          >
            <img
              // src={sport.flag}
              src={"https://api.betnare.com/v1" + sport.flag}
              style={{ width: "10px", height: "10px", marginRight: "5px" }}
            />
            <span>{sport.sport_name}</span>
          </AccordionSummary>
          <AccordionDetails
            sx={{ backgroundColor: "#16202C", color: "white", border: "none" }}
          >
            {data.top_soccer.map((league, index) => (
              <div key={index}>
                <img
                  src={"https://api.betnare.com/v1" + league.flag}
                  style={{ width: "10px", height: "10px", marginRight: "5px" }}
                />
                <span>{league.competition_name}</span>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default HomeLeft;
