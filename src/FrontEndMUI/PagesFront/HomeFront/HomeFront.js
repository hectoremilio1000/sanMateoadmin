import { ThemeProvider } from "@mui/material/styles";
import theme from "../../assetsFrontMUI/theme";
import React from "react";
import BannerFront from "../../componentsFront/BannerFront/BannerFront";
import CssBaseline from "@mui/material/CssBaseline";
import Body3Component from "../Presentation/sections/Body3Component";

function HomeFront() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BannerFront />
        <Body3Component />
      </ThemeProvider>
    </>
  );
}

export default HomeFront;
