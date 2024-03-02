import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./Header.css"; // Ensure this file exists and contains your styles

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenuItems = () => (
    <>
      <MenuItem onClick={handleMenuClose} component={Link} to="/Map">
        Hotel Map
      </MenuItem>
      <MenuItem onClick={handleMenuClose} component={Link} to="/TV_Channels">
        TV Channel List
      </MenuItem>
      <MenuItem
        onClick={(e) => {
          e.preventDefault();
          handleMenuClose();
          window.open("/flipbook/Chinese-Menu.html", "_blank");
        }}
      >
        Chinese Restaurant Menu
      </MenuItem>
      <MenuItem
        onClick={(e) => {
          e.preventDefault();
          handleMenuClose();
          window.open("/flipbook/lobby-bar-menu.html", "_blank");
        }}
      >
        Lobby Bar Menu
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        to="/Room_Service_Menu"
      >
        Room Service Menu
      </MenuItem>
      <MenuItem onClick={handleMenuClose} component={Link} to="/About">
        About Us
      </MenuItem>
    </>
  );

  return (
    <AppBar
      position="absolute"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="Black"
            aria-label="open drawer"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Menu
          id="primary-search-account-menu"
          anchorEl={anchorEl}
          keepMounted
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          {renderMenuItems()}
        </Menu>
        {!isMobile && (
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              color: "black",
              fontWeight: "bolder",
            }}
          >
            <Link to="/">
              <img
                src="/Logo.png"
                alt="Hotel & Restaurant Logo"
                className="logo"
              />
            </Link>
            <Box sx={{ display: "flex" }}>{renderMenuItems()}</Box>
          </Box>
        )}
        {isMobile && (
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Link to="/">
              <img
                src="/Logo.png"
                alt="Hotel & Restaurant Logo"
                className="logo"
              />
            </Link>
          </Box>
        )}
        {/* Additional header content can be placed here */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
