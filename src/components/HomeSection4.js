import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HomeSection4 = ({ selectedSport }) => {
  return (
    <div>
      <h3 style={{ color: "white" }}>Countries</h3>
      {selectedSport ? (
        <div>
          <p
            style={{
              display: "inline-block",
              color: "#FFC11C",
              border: "none",
              borderRadius: "5px",
              padding: "3px",
            }}
          >
            {selectedSport.sport_name}
          </p>
          <ul>
            {Object.entries(selectedSport.categories).map(
              ([categoryId, category]) => (
                <Accordion
                  key={categoryId}
                  sx={{
                    backgroundColor: "#16202C",
                    color: "white",
                    border: "none",
                    boxShadow: "none",
                    width: "95%",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  >
                    <h4>{category.category_name}</h4>
                  </AccordionSummary>
                  <AccordionDetails>
                    {category.competitions && (
                      <ul>
                        {category.competitions.map((competition) => (
                          <li key={competition.competition_id}>
                            {competition.competition_name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </AccordionDetails>
                </Accordion>
              )
            )}
          </ul>
        </div>
      ) : (
        <p style={{ color: "white" }}>Kindly select a sport on the left.</p>
      )}
    </div>
  );
};

export default HomeSection4;
