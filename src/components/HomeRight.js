import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import theme from "../theme";
import paybillImage from "../images/paybillImage.png";
import tukoRada from "../images/tukoImage.png";

function RightHome() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: 0,
          m: 0,
          bgcolor: "none",
          borderRadius: 1,
        }}
      >
        <h3 style={{ color: "white" }}>BETSLIP</h3>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.inactiveYellow.default,
            color: "black",
            textTransform: "uppercase",
            fontWeight: "bold",
            marginRight: { xs: "5px" },
            padding: "3px 10px",
            borderRadius: "50px",
            height: "30px",
            width: "10px"
          }}
        >
          0
        </Button>
      </Box>
      <Box sx={{ mt: 2, mr: 1 }}>
        <img src={paybillImage} alt="paybill" style={{ width: '100%' }} />
      </Box>
      <Box sx={{ mt: 2, mr: 1 }}>
        <img src={tukoRada} alt="tukorada" style={{ width: '100%' }} />
      </Box>
    </div>
  );
}

export default RightHome;
