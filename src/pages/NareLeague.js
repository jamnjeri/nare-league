import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import { Grid } from "@mui/material";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";

function NareLeague() {
  return (
    <div>
      {/* <Header /> */}
      {/* Body */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          {/* Left column */}
          <LeftColumn />
        </Grid>
        <Grid item xs={12} md={3}>
          {/* Right column */}
          <RightColumn />
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </div>
  );
}

export default NareLeague;
