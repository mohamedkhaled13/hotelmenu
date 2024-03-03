// RoomServiceMenu.js
import React from "react";
import ImageFlipBook from "./ImageFlipBook";

const roomServiceMenuImages = [
  "/flipbook/img/room-service-menu/1.jpg",
  "/flipbook/img/room-service-menu/2.jpg",
  "/flipbook/img/room-service-menu/3.jpg",
  "/flipbook/img/room-service-menu/4.jpg",
  "/flipbook/img/room-service-menu/5.jpg",
  // Add more paths as needed
];

const RoomServiceMenu = () => {
  return <ImageFlipBook imagePaths={roomServiceMenuImages} />;
};

export default RoomServiceMenu;
