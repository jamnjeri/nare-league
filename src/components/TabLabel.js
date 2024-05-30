import React from "react";
import Box from "@mui/material/Box";

const TabLabel = ({ src, alt, label }) => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <img src={src} alt={alt} style={{ width: 100, height: 25, marginBottom: 4 }} />
    {label}
  </Box>
);

export default TabLabel;
