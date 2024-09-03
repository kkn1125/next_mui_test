import { Container, Grid, styled } from "@mui/material";
import Box from "@mui/material/Box";
import { Fragment } from "react";
import Apps from "./Apps";
import PrimarySearchAppBar from "./PrimarySearchAppBar";

function BoxRoot({ children, main }) {
  return (
    <>
      {main && <Box>{main}</Box>}
      <Box>{children}</Box>
    </>
  );
}

function Layout({ children }) {
  return (
    <Fragment>
      <Grid container>
        <PrimarySearchAppBar />
      </Grid>
      <Container>
        <BoxRoot main={<Apps />}>{children}</BoxRoot>
      </Container>
    </Fragment>
  );
}

export default Layout;
