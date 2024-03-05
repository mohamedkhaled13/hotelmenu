// TVChannelsList.js
import React from "react";
import "./TVChannelsList.css"; // Import the CSS for styling

// Assuming you have a JSON file with the channel data
import channelData from "./channels.json";

const TVChannelsList = () => {
  return (
    <div className="channels-container">
      {channelData.map((category) => (
        <div key={category.category} className="category">
          <h2 className="category-title">{category.category}</h2>
          <ul className="channel-list">
            {category.channels.map((channel) => (
              <li key={channel.number} className="channel-item">
                <span className="channel-number">{channel.number}</span>
                <span className="channel-name">{channel.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TVChannelsList;

// import React from "react";
// import ImageFlipBook from "./ImageFlipBook";

// const TVChannelsListImages = [
//   "/flipbook/img/TV-Channels-List/1.png",
//   "/flipbook/img/TV-Channels-List/2.png",
//   // Add more paths as needed
// ];

// const TVChannelsList = () => {
//   return <ImageFlipBook imagePaths={TVChannelsListImages} />;
// };

// export default TVChannelsList;
