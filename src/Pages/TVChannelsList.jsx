// TVChannelsList.js
import React from "react";
import ImageFlipBook from "./ImageFlipBook";

const TVChannelsListImages = [
  "/flipbook/img/TV-Channels-List/1.png",
  "/flipbook/img/TV-Channels-List/2.png",
  // Add more paths as needed
];

const TVChannelsList = () => {
  return <ImageFlipBook imagePaths={TVChannelsListImages} />;
};

export default TVChannelsList;
