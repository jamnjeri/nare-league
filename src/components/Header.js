import React from "react";
import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../images/betnarelogo.svg";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const pages = [
  "Home",
  "Aviator",
  "JetX",
  "Live",
  "Jackpot",
  "Casino",
  "NareLeague",
  "LiveScore",
  "Promotions",
];

const pagePaths = {
  Home: "/",
  NareLeague: "/nare-league",
};

const defaultPath = "/";

function Header() {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (page) => {
    // setActivePage(page);
    handleCloseNavMenu();
  };

  return (
    <div>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Toolbar
          sx={{
            "@media (min-width: 0px)": { paddingRight: 0, paddingLeft: 0 },
          }}
        >
          <Box sx={{ marginLeft: "2px" }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "auto",
                height: "2.8vh",
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            sx={{
              display: { xs: "none", sm: "inline", lg: "none" },
              backgroundColor: theme.palette.loadingGreen.default,
              color: "white",
              textTransform: "uppercase",
              fontWeight: "normal",
              marginRight: "5px",
              padding: "3px 10px",
            }}
          >
            Verify
          </Button>
          <Box sx={{ marginRight: "2px" }}>
            <Button
              sx={{
                display: { xs: "none", lg: "inline" },
                backgroundColor: theme.palette.background.default,
                color: theme.palette.loginBlue.default,
                textTransform: "uppercase",
                fontWeight: "normal",
                padding: "3px 10px",
              }}
            >
              LOGIN
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.inactiveYellow.default,
                color: "black",
                textTransform: "uppercase",
                fontWeight: "bold",
                marginRight: { xs: "5px" },
                padding: "3px 10px",
              }}
            >
              REGISTER
            </Button>
            <Button
              variant="contained"
              sx={{
                display: { xs: "inline", lg: "none" },
                backgroundColor: theme.palette.background.default,
                color: theme.palette.linkBlue.default,
                textTransform: "uppercase",
                fontWeight: "normal",
                boxShadow: 0,
              }}
            >
              Login
            </Button>
            <IconButton
              aria-label="search"
              size="large"
              sx={{ display: { md: "none" }, mr: 1 }}
            >
              <SearchIcon sx={{ color: "#359AD1" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* 2nd Navbar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: theme.palette.background.default, boxShadow: 0 }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              "@media (min-width: 0px)": { paddingRight: 0, paddingLeft: 0 },
            }}
          >
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handlePageClick(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={pagePaths[page] || defaultPath}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
