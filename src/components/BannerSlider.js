import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";
import banner4 from "../images/banner4.png";
import banner5 from "../images/banner5.png";
import banner6 from "../images/banner6.png";
import banner7 from "../images/banner7.png";
import banner8 from "../images/banner8.png";

const banners = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
];

const BannerSlider = () => {
  const [index, setIndex] = useState(0);

  const handleLeftClick = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      marginX="10px"
    >
      <IconButton
        onClick={handleLeftClick}
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <img
        src={banners[index]}
        alt={`Banner ${index + 1}`}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <IconButton
        onClick={handleRightClick}
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default BannerSlider;
