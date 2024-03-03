// ChineseMenu.js
import React from "react";
import ImageFlipBook from "./ImageFlipBook";

const chineseMenuImages = [
  "/flipbook/img/chinese-menu/1.png",
  "/flipbook/img/chinese-menu/2.jpg",
  "/flipbook/img/chinese-menu/3.jpg",
  // Add more paths as needed
];

const ChineseMenu = () => {
  return <ImageFlipBook imagePaths={chineseMenuImages} />;
};

export default ChineseMenu;
