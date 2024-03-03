// LobbyBarMenu.js
import React from "react";
import ImageFlipBook from "./ImageFlipBook";

const lobbyBarMenuImages = [
  "/flipbook/img/lobby-bar-menu/1.jpg",
  "/flipbook/img/lobby-bar-menu/2.jpg",
  "/flipbook/img/lobby-bar-menu/3.jpg",
  "/flipbook/img/lobby-bar-menu/4.jpg",
  "/flipbook/img/lobby-bar-menu/5.jpg",
  "/flipbook/img/lobby-bar-menu/6.jpg",
  "/flipbook/img/lobby-bar-menu/7.jpg",
  "/flipbook/img/lobby-bar-menu/8.jpg",
  "/flipbook/img/lobby-bar-menu/9.jpg",
  // Add more paths as needed
];

const LobbyBarMenu = () => {
  return <ImageFlipBook imagePaths={lobbyBarMenuImages} />;
};

export default LobbyBarMenu;
