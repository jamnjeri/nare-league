import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import theme from "../theme";
import paybillImage from "../images/paybillImage.png";
import tukoRada from "../images/tukoImage.png";
import TextField from "@mui/material/TextField";

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
            width: "10px",
          }}
        >
          0
        </Button>
      </Box>
      <Box
        sx={{
          marginX: "5px",
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h3
          style={{
            color: "white",
          }}
        >
          Enter betslip share code to load betslip
        </h3>
        <TextField
          id="outlined-basic"
          label="eg. PWXfsxR "
          variant="outlined"
          sx={{
            width: "98%",
            height: "auto",
            backgroundColor: "#28374E",
            borderRadius: "5px",
            color: "white",
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.inactiveYellow.default,
            color: "black",
            textTransform: "uppercase",
            fontWeight: "bold",
            marginRight: { xs: "5px" },
            marginTop: "20px",
            marginBottom: '10px',
            padding: "3px 10px",
            borderRadius: "5px",
            width: "98%",
            height: "40px",
          }}
        >
          LOAD SLIP
        </Button>
      </Box>
      <Box sx={{ mt: 2, mr: 1 }}>
        <img src={paybillImage} alt="paybill" style={{ width: "100%" }} />
      </Box>
      <Box sx={{ mt: 2, mr: 1 }}>
        <img src={tukoRada} alt="tukorada" style={{ width: "100%" }} />
      </Box>
    </div>
  );
}

export default RightHome;
