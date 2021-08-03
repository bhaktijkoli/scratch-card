import * as React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@material-ui/core";

import Account from "./Account";
import { useHistory } from "react-router-dom";

const Desktop: React.FC = () => {
  const history = useHistory();
  const handleRedirect = (url: string) => {
    history.push(url);
  }
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" color="inherit" component="a">
          Dashboard
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Button color="inherit" onClick={() => handleRedirect('/dashboard')}>Dashboard</Button>
          <Button color="inherit" onClick={() => handleRedirect('/cards')}>Cards</Button>
          <Button color="inherit" onClick={() => handleRedirect('/users')}>Users</Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Desktop;
