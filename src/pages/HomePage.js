import React from "react";
import Grid from "@mui/material/Grid";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";

function Home() {
  return (
    <Grid container spacing={0}>
      {/* Left column */}
      <Grid item xs={2}>
        {/* Content for the middle column */}
        <div style={{ backgroundColor: "none", height: "100%", color: "white" }}>
          <HomeLeft />
        </div>
      </Grid>
      {/* Middle column */}
      <Grid item xs={7}>
        {/* Content for the middle column */}
        <div style={{ backgroundColor: "none", height: "100%" }}>
          Middle Column
        </div>
      </Grid>
      {/* Right column */}
      <Grid item xs={3}>
        {/* Content for the right column */}
        <div style={{ backgroundColor: "none", height: "100%" }}>
          <HomeRight />
        </div>
      </Grid>
    </Grid>
  );
}

export default Home;
