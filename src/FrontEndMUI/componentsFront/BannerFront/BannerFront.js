import React from "react";
import MKBox from "../ComponetsMUI2/MKBox";

// Images
import bgImage from "../../assetsFrontMUI/images/banner/banner_laboratorioFase2.jpg";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "../ComponetsMUI2/MKTypography";
import MKButton from "../ComponetsMUI2/MKButton";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Information from "../../PagesFront/Presentation/sections/Information";

function BannerFront() {
  const action = {
    type: "external",
    route: "https://wa.me/+5219511028474",
    label: "Solicita ya",
    color: "success",
  };
  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          justifyContent: "start",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={5} lg={12} justifyContent="center">
            <MKTypography
              variant="h1"
              color="dark"
              textAlign="left"
              width="100%"
              px={{ xs: -6, lg: -6 }}
              mt={{ xs: -20, md: 0 }}
              style={{ fontWeight: 800 }}
              // size={{ xs: 20, md: 30 }}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Laboratorio
            </MKTypography>
            <MKTypography
              variant="h1"
              color="dark"
              textAlign="left"
              width="100%"
              px={{ xs: -6, lg: -6 }}
              mt={{ xs: -16, md: 0 }}
              style={{ fontWeight: 800 }}
              // size={{ xs: 20, md: 30 }}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              en 1 click
            </MKTypography>

            <MKTypography
              variant="body1"
              color="dark"
              textAlign="left"
              width="100%"
              px={{ xs: -6, lg: -6 }}
              style={{ fontWeight: 600 }}
              mt={1}
            >
              Tú escoges donde
            </MKTypography>
            <MKBox
              ml={{ xs: 0, lg: 0 }}
              px={{ xs: -6, lg: -6 }}
              textAlign="left"
              width="100%"
            >
              {action &&
                (action.type === "internal" ? (
                  <MKButton
                    component={Link}
                    to={action.route}
                    variant={
                      action.color === "white" || action.color === "default"
                        ? "contained"
                        : "gradient"
                    }
                    color={action.color ? action.color : "white"}
                    size="small"
                  >
                    {action.label}
                  </MKButton>
                ) : (
                  <MKButton
                    className="buttonWhatsHover"
                    component="a"
                    href={action.route}
                    target="_blank"
                    rel="noreferrer"
                    variant={
                      action.color === "white" || action.color === "white"
                        ? "contained"
                        : "gradient"
                    }
                    color={action.color ? action.color : "white"}
                    size="small"
                  >
                    {action.label}
                  </MKButton>
                ))}
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <MKBox>
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -2,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
              rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Information />
        </Card>
      </MKBox>
    </>
  );
}

export default BannerFront;
