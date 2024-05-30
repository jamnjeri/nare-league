import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompetitions } from "./competitionsSlice";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const HomeLeft = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.competitions);

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

  const baseUrl = "https://api.betnare.com/v1";

  // Store name and flag
  const sportsWithFlags = data.all_sports.map((sport) => ({
    name: sport.sport_name,
    // flag: `${baseUrl}${sport.flag}`,
    flag: sport.flag,
  }));

  return (
    <div>
      {sportsWithFlags.map((sport, index) => (
        <Accordion key={index} sx={{ backgroundColor: "#16202C", color: "white", border: "none", boxShadow: "none", minHeight: "20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }}/>}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{ backgroundColor: "none", border: "none" }}
          >
            <img
              src={sport.flag}
              style={{ width: "10px", height: "10px", marginRight: "5px" }}
            />
            <span>{sport.name}</span>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#16202C", color: "white", border: "none" }}>
            <Typography>More details</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default HomeLeft;
