import React from "react";

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
  return (
    <div style={{ width: "100%", paddingTop: "1vh" }}>
      {lobbyBarMenuImages.map((imagePath, index) => (
        <img
          key={index}
          src={imagePath}
          alt={`Lobby bar menu ${index + 1}`}
          style={{ width: "100%", height: "auto" }}
        />
      ))}
    </div>
  );
};

export default LobbyBarMenu;

// import React from "react";
// import ImageFlipBook from "./ImageFlipBook";

// const lobbyBarMenuImages = [
//   "/flipbook/img/lobby-bar-menu/1.jpg",
//   "/flipbook/img/lobby-bar-menu/2.jpg",
//   "/flipbook/img/lobby-bar-menu/3.jpg",
//   "/flipbook/img/lobby-bar-menu/4.jpg",
//   "/flipbook/img/lobby-bar-menu/5.jpg",
//   "/flipbook/img/lobby-bar-menu/6.jpg",
//   "/flipbook/img/lobby-bar-menu/7.jpg",
//   "/flipbook/img/lobby-bar-menu/8.jpg",
//   "/flipbook/img/lobby-bar-menu/9.jpg",
//   // Add more paths as needed
// ];

// const LobbyBarMenu = () => {
//   return <ImageFlipBook imagePaths={lobbyBarMenuImages} />;
// };

// export default LobbyBarMenu;
