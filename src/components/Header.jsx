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
      <MenuItem
        sx={{ fontWeight: "bold", fontFamily: "monospace" }}
        onClick={handleMenuClose}
        component={Link}
        to="/Hotel-Map"
      >
        Hotel Map
      </MenuItem>

      <MenuItem
        sx={{ fontWeight: "bold", fontFamily: "monospace" }}
        onClick={handleMenuClose}
        component={Link}
        to="/TV-Channels-List"
      >
        TV Channel List
      </MenuItem>
      <MenuItem
        sx={{ fontWeight: "bold", fontFamily: "monospace" }}
        onClick={handleMenuClose}
        component={Link}
        to="/chinese-menu"
      >
        Chinese Restaurant Menu
      </MenuItem>
      <MenuItem
        sx={{ fontWeight: "bold", fontFamily: "monospace" }}
        onClick={handleMenuClose}
        component={Link}
        to="/lobby-bar-menu"
      >
        Lobby Bar Menu
      </MenuItem>
      <MenuItem
        sx={{ fontWeight: "bold", fontFamily: "monospace" }}
        onClick={handleMenuClose}
        component={Link}
        to="/room-service-menu"
      >
        Room Service Menu
      </MenuItem>
    </>
  );

  return (
    <AppBar
      className="header"
      position="fixed"
      sx={{
        boxShadow: "none",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        bgcolor: "#04ccdc50",
        display: "block",
      }}
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
              color: "inherit",
              fontWeight: "bolder",
            }}
          >
            <Link to="/">
              <img
                src="/logo-makadi-white.png"
                alt="Hotel & Restaurant Logo"
                className="logo"
              />
            </Link>
            <Box sx={{ display: "flex" }}>{renderMenuItems()}</Box>
          </Box>
        )}
        {isMobile && (
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "right",
              color: "inherit",
              fontWeight: "bolder",
            }}
          >
            <Link to="/">
              <img
                src="/logo-makadi-white.png"
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
