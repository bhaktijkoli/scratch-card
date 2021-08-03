import * as React from "react";
import { Avatar, IconButton, Menu, MenuItem } from "@material-ui/core";
import { Settings, ExitToApp } from "@material-ui/icons";
import firebase from "firebase";

const Account: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = (url: string) => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    window.location.href = "/login";
  };

  const menuId = "navbar-account-menu";
  const currentUser = firebase.auth().currentUser;

  return (
    <React.Fragment>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        color="inherit"
        onClick={handleMenuOpen}
      >
        <Avatar
          src={`https://ui-avatars.com/api/?name=${currentUser?.displayName}`}
          alt="Avatar"
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleRedirect("/settings")}>
          <Settings sx={{ marginRight: 1 }} />
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ExitToApp sx={{ marginRight: 1 }} />
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default Account;
