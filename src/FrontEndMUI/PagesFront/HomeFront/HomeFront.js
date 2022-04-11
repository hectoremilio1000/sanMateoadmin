import { ThemeProvider } from "@mui/material/styles";
import theme from "../../assetsFrontMUI/theme";
import React from "react";
import BannerFront from "../../componentsFront/BannerFront/BannerFront";
import CssBaseline from "@mui/material/CssBaseline";
import Body3Component from "../Presentation/sections/Body3Component";
import Calendario from "../Presentation/sections/Calendario";

function HomeFront() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BannerFront />
        <Body3Component />
        <Calendario />
      </ThemeProvider>
    </>
  );
}

export default HomeFront;
