import * as React from "react";
import { Navbar } from "components";
import { withAuth } from "hooks";
import { Container } from "@material-ui/core";

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container sx={{ marginTop: 10 }} maxWidth="lg"></Container>
    </React.Fragment>
  );
};

export default withAuth(Dashboard);
