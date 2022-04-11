/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../componentsFront/ComponetsMUI2/MKBox";

// Material Kit 2 React examples
import RotatingCard from "../../../examples/Cards/RotatingCard";

import RotatingCardFront from "../../../examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../../../examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "../../../assetsFrontMUI/images/pasadas/body_2_serviciosSanMateo.jpg";

import bgBack from "../../../assetsFrontMUI/images/pasadas/bannerLaboratorio.jpg";
import "./section.css";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Test
                    <br />a domicilio
                  </>
                }
                description="Somos una empresa de laboratorios de Test Clínicos comprometida a ofrecer servicios de Primer Mundo a precios accesibles para toda la población."
              />
              <RotatingCardBack
                image={bgBack}
                title="Pensamos en ti"
                description="Nuestra misión es cuidar del paciente y sus ingresos, ofreciendo la mayor confiabilidad y confidencialidad en cada test clínico."
                action={{
                  type: "external",
                  route: "https://wa.me/+5219511028474",
                  label: "Reserva",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="vaccines"
                  title="Laboratorio certificado"
                  description="Somos un laboratorio que cumple con todos los certificados a nivel nacional"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="tag_faces"
                  title="Confiable"
                  description="Cumplimos con todas las normas del ISO9000"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_check"
                  title="Ahorro"
                  description="Creemos que el precio no tiene que estar peleado con la calidad"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="bolt"
                  title="Rápido"
                  description="LLegamos a cualquier punto en 30 minutos"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
