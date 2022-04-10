import { ThemeProvider } from "@mui/material/styles";
import theme from "../../assetsFrontMUI/theme";
import React from "react";
import BannerFront from "../../componentsFront/BannerFront/BannerFront";
import CssBaseline from "@mui/material/CssBaseline";

function HomeFront() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BannerFront />
      </ThemeProvider>
    </>
  );
}

export default HomeFront;
