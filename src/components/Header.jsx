import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure you have the CSS file for styles

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        <div className="container">
          <input
            type="checkbox"
            name="check"
            id="check"
            checked={isMenuOpen}
            onChange={toggleMenu}
          />
          <div className="logo-container">
            <img
              src="/logo-makadi-white.png"
              alt="Hotel & Restaurant Logo"
              style={{ objectFit: "contain", height: "5vh" }}
            />
            <h3 className="logo">
              Stella<span> Makadi</span>
            </h3>
          </div>

          <div className="hamburger-menu-container" onClick={toggleMenu}>
            <div className="hamburger-menu">
              <div></div>
            </div>
          </div>

          <div className={`nav-btn ${isMenuOpen ? "open" : ""}`}>
            <div className="nav-links">
              <ul>
                <li
                  className="nav-link"
                  style={{ "--i": ".5s" }}
                  onClick={closeMenu}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  className="nav-link"
                  style={{ "--i": ".6s" }}
                  onClick={closeMenu}
                >
                  <Link to="/hotel-map">Hotel Map</Link>
                </li>
                <li
                  className="nav-link"
                  style={{ "--i": ".85s" }}
                  onClick={closeMenu}
                >
                  <Link to="/tv-channels-list">TV Channel List</Link>
                </li>
                <li className="nav-link" style={{ "--i": "1.1s" }}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#">
                    Restaurants<i className="fas fa-caret-down"></i>
                  </a>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link" onClick={closeMenu}>
                        <Link to="/restaurants/main-beach-menu">
                          Main Restaurant Beach Menu
                        </Link>
                      </li>
                      <li className="dropdown-link" onClick={closeMenu}>
                        <Link to="/restaurants/main-garden-menu">
                          Main Restaurant Garden Menu
                        </Link>
                      </li>
                      <li className="dropdown-link" onClick={closeMenu}>
                        <Link to="/restaurants/chinese-menu">
                          Chinese Restaurant Menu
                        </Link>
                      </li>
                      <li className="dropdown-link" onClick={closeMenu}>
                        <Link to="/restaurants/italian-menu">
                          Italian Restaurant Menu
                        </Link>
                      </li>
                      <li className="dropdown-link" onClick={closeMenu}>
                        <Link to="/restaurants/lebanese-menu">
                          Lebanese Restaurant Menu
                        </Link>
                      </li>
                      <li className="dropdown-link" onClick={closeMenu}>
                        <Link to="/restaurants/indian-menu">
                          Indian Restaurant Menu
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className="nav-link"
                  style={{ "--i": "1.35s" }}
                  onClick={closeMenu}
                >
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </div>
            <div className="log-sign" style={{ "--i": "1.8s" }}>
              <Link to="/login" className="btn transparent" onClick={closeMenu}>
                Log in
              </Link>
              <Link to="/signup" className="btn solid" onClick={closeMenu}>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "./Header.css"; // Assuming you have a CSS file for styles

// const Header = () => {
//   return (
//     <>
//       <header>
//         <div className="container">
//           <input type="checkbox" name="check" id="check" />
//           <div className="logo-container">
//             <img
//               src="/logo-makadi-white.png"
//               alt="Hotel & Restaurant Logo"
//               style={{ objectFit: "contain", height: "5vh" }}
//             />
//             <h3 className="logo">
//               Stella<span> Makadi</span>
//             </h3>
//           </div>

//           <div className="nav-btn">
//             <div className="nav-links">
//               <ul>
//                 <li className="nav-link" style={{ "--i": ".6s" }}>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li className="nav-link" style={{ "--i": ".85s" }}>
//                   <Link to="/">
//                     Menu<i className="fas fa-caret-down"></i>
//                   </Link>
//                   <div className="dropdown">
//                     <ul>
//                       <li className="dropdown-link">
//                         <Link to="/">Link 1</Link>
//                       </li>
//                       <li className="dropdown-link">
//                         <Link to="/">Link 2</Link>
//                       </li>
//                       <li className="dropdown-link">
//                         <Link to="/">
//                           Link 3<i className="fas fa-caret-down"></i>
//                         </Link>
//                         <div className="dropdown second">
//                           <ul>
//                             <li className="dropdown-link">
//                               <Link to="/">Link 1</Link>
//                             </li>
//                             <li className="dropdown-link">
//                               <Link to="/">Link 2</Link>
//                             </li>
//                             <li className="dropdown-link">
//                               <Link to="/">Link 3</Link>
//                             </li>
//                             <li className="dropdown-link">
//                               <Link to="/">
//                                 More<i className="fas fa-caret-down"></i>
//                               </Link>
//                               <div className="dropdown second">
//                                 <ul>
//                                   <li className="dropdown-link">
//                                     <Link to="/">Link 1</Link>
//                                   </li>
//                                   <li className="dropdown-link">
//                                     <Link to="/">Link 2</Link>
//                                   </li>
//                                   <li className="dropdown-link">
//                                     <Link to="/">Link 3</Link>
//                                   </li>
//                                   <div className="arrow"></div>
//                                 </ul>
//                               </div>
//                             </li>
//                             <div className="arrow"></div>
//                           </ul>
//                         </div>
//                       </li>
//                       <li className="dropdown-link">
//                         <Link to="/">Link 4</Link>
//                       </li>
//                       <div className="arrow"></div>
//                     </ul>
//                   </div>
//                 </li>
//                 <li className="nav-link" style={{ "--i": "1.1s" }}>
//                   <Link to="/">
//                     Services<i className="fas fa-caret-down"></i>
//                   </Link>
//                   <div className="dropdown">
//                     <ul>
//                       <li className="dropdown-link">
//                         <Link to="/">Link 1</Link>
//                       </li>
//                       <li className="dropdown-link">
//                         <Link to="/">Link 2</Link>
//                       </li>
//                       <li className="dropdown-link">
//                         <Link to="/">
//                           Link 3<i className="fas fa-caret-down"></i>
//                         </Link>
//                         <div className="dropdown second">
//                           <ul>
//                             <li className="dropdown-link">
//                               <Link to="/">Link 1</Link>
//                             </li>
//                             <li className="dropdown-link">
//                               <Link to="/">Link 2</Link>
//                             </li>
//                             <li className="dropdown-link">
//                               <Link to="/">Link 3</Link>
//                             </li>
//                             <li className="dropdown-link">
//                               <Link to="/">
//                                 More<i className="fas fa-caret-down"></i>
//                               </Link>
//                               <div className="dropdown second">
//                                 <ul>
//                                   <li className="dropdown-link">
//                                     <Link to="/">Link 1</Link>
//                                   </li>
//                                   <li className="dropdown-link">
//                                     <Link to="/">Link 2</Link>
//                                   </li>
//                                   <li className="dropdown-link">
//                                     <Link to="/">Link 3</Link>
//                                   </li>
//                                   <div className="arrow"></div>
//                                 </ul>
//                               </div>
//                             </li>
//                             <div className="arrow"></div>
//                           </ul>
//                         </div>
//                       </li>
//                       <li className="dropdown-link">
//                         <Link to="/">Link 4</Link>
//                       </li>
//                       <div className="arrow"></div>
//                     </ul>
//                   </div>
//                 </li>
//                 <li className="nav-link" style={{ "--i": "1.35s" }}>
//                   <Link to="/">About</Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="log-sign" style={{ "--i": "1.8s" }}>
//               <Link to="/" className="btn transparent">
//                 Log in
//               </Link>
//               <Link to="/" className="btn solid">
//                 Sign up
//               </Link>
//             </div>
//           </div>

//           <div className="hamburger-menu-container">
//             <div className="hamburger-menu">
//               <div></div>
//             </div>
//           </div>
//         </div>
//       </header>
//       {/* <main>
//         <section>
//           <div className="overlay"></div>
//         </section>
//       </main> */}
//     </>
//   );
// };

// export default Header;
// ///////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import Box from "@mui/material/Box";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import "./Header.css"; // Ensure this file exists and contains your styles

// const Header = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const isMenuOpen = Boolean(anchorEl);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const renderMenuItems = () => (
//     <>
//       <MenuItem
//         sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}
//         onClick={handleMenuClose}
//         component={Link}
//         to="/Hotel-Map"
//       >
//         Hotel Map
//       </MenuItem>

//       <MenuItem
//         sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}
//         onClick={handleMenuClose}
//         component={Link}
//         to="/TV-Channels-List"
//       >
//         TV Channel List
//       </MenuItem>
//       <MenuItem
//         sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}
//         onClick={handleMenuClose}
//         component={Link}
//         to="/chinese-menu"
//       >
//         Chinese Restaurant Menu
//       </MenuItem>
//       <MenuItem
//         sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}
//         onClick={handleMenuClose}
//         component={Link}
//         to="/lobby-bar-menu"
//       >
//         Lobby Bar Menu
//       </MenuItem>
//       <MenuItem
//         sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}
//         onClick={handleMenuClose}
//         component={Link}
//         to="/room-service-menu"
//       >
//         Room Service Menu
//       </MenuItem>
//     </>
//   );

//   return (
//     <AppBar
//       className="header"
//       position="fixed"
//       sx={{
//         boxShadow: "none",
//         borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
//         bgcolor: "#04ccdc50",
//         display: "block",
//       }}
//     >
//       <Toolbar>
//         {isMobile && (
//           <IconButton
//             edge="start"
//             color="Black"
//             aria-label="open drawer"
//             aria-controls="primary-search-account-menu"
//             aria-haspopup="true"
//             onClick={handleMenuOpen}
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//         )}
//         <Menu
//           id="primary-search-account-menu"
//           anchorEl={anchorEl}
//           keepMounted
//           open={isMenuOpen}
//           onClose={handleMenuClose}
//         >
//           {renderMenuItems()}
//         </Menu>
//         {!isMobile && (
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: "flex",
//               justifyContent: "space-between",
//               color: "inherit",
//               fontWeight: "bolder",
//             }}
//           >
//             <Link to="/">
//               <img
//                 src="/logo-makadi-white.png"
//                 alt="Hotel & Restaurant Logo"
//                 className="logo"
//               />
//             </Link>
//             <Box sx={{ display: "flex" }}>{renderMenuItems()}</Box>
//           </Box>
//         )}
//         {isMobile && (
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: "flex",
//               justifyContent: "right",
//               color: "inherit",
//               fontWeight: "bolder",
//             }}
//           >
//             <Link to="/">
//               <img
//                 src="/logo-makadi-white.png"
//                 alt="Hotel & Restaurant Logo"
//                 className="logo"
//               />
//             </Link>
//           </Box>
//         )}
//         {/* Additional header content can be placed here */}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
