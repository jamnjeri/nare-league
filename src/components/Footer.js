import * as React from "react";
import { Grid, SvgIcon } from "@mui/material";
import { Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/material";

function Footer() {
  const styles = {
    item: {
      backgroundColor: "none",
      //   padding: "16px",
      margin: "11px 0 11px 1px",
      textAlign: "left",
      color: "white",
      border: "none",
    },
  };
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      padding="10px 10px 10px 0"
    >
      <Grid item xs={1} sm={2} md={3}>
        <div style={styles.item}>
          <h3>BETNARE</h3>
          <p>P.O.BOX 00100 NAIROBI KENYA</p>
          <Box display="flex" alignItems="center">
            <EmailIcon />
            <p style={{ marginLeft: 8 }}>support@betnare.com</p>{" "}
          </Box>
          <Box display="flex" alignItems="center">
            <FacebookIcon />
            <p style={{ marginLeft: 8 }}>Facebook</p>{" "}
          </Box>
          <Box display="flex" alignItems="center">
            <InstagramIcon />
            <p style={{ marginLeft: 8 }}>Instagram</p>{" "}
          </Box>
        </div>
      </Grid>
      <Grid item xs={1} sm={2} md={3}>
        <div style={styles.item}>
          <h3>TERMS AND CONDITIONS</h3>
          <p>Terms and Conditions</p>
          <p>Responsible Gambling</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>How to Play</p>
        </div>
      </Grid>
      <Grid item xs={1} sm={2} md={3}>
        <div style={styles.item}>
          <h3>LEGAL</h3>
          <p style={{ color: "red" }}>
            You must be 18 Years+ to use this website
          </p>
          <p>Dispute Resolution</p>
          <p>Anti-money Laundering</p>
          <h3>RESPONSIBLE GAMBLING</h3>
          <p>
            This is a real-money gambling app. Please gamble responsibly and
            only bet what you can afford. For gambling addiction help and
            support, please contact CustomerCare at (+254701087777), or visit (
            <a
              href="https://responsiblegambling.or.ke/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00FFFF" }}
            >
              {" "}
              Responsible Gambling Website
            </a>{" "}
            ).
          </p>
          <p>
            For more information, please view our Responsible Gaming Policy&nbsp;
            <a
              href="https://www.betnare.com/responsible-gambling"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00FFFF" }}
            >
               here
            </a>
          </p>
        </div>
      </Grid>
      <Grid item xs={1} sm={2} md={3}>
        <div style={styles.item}>
          <h3>LICENSING</h3>
          <p>We are licensed and regulated by the Betting</p>
          <p>Control and Licensing Board BCLB 0000540</p>
        </div>
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center" color="white">
        <Typography variant="body1" color="inherit">
          Copyright
          <SvgIcon
            component={CopyrightIcon}
            sx={{ verticalAlign: "middle", marginRight: "4px" }}
          />
          2024 All rights Reserved.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
