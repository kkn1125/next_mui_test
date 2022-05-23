import { Box, Container, Grid } from "@mui/material";
import { Fragment } from "react";
import PrimarySearchAppBar from "./PrimarySearchAppBar";

function Layout({ children }) {
  return (
    <Fragment>
      <Grid container>
        <PrimarySearchAppBar />
      </Grid>
      <Container>
        <Box>{children}</Box>
      </Container>
    </Fragment>
  );
}

export default Layout;
