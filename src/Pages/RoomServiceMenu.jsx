import React from "react";

const roomServiceMenuImages = [
  "/flipbook/img/room-service-menu/1.jpg",
  "/flipbook/img/room-service-menu/2.jpg",
  "/flipbook/img/room-service-menu/3.jpg",
  "/flipbook/img/room-service-menu/4.jpg",
  "/flipbook/img/room-service-menu/5.jpg",
  // Add more paths as needed
];

const RoomServiceMenu = () => {
  return (
    <div style={{ width: "100%", paddingTop: "1vh" }}>
      {roomServiceMenuImages.map((imagePath, index) => (
        <img
          key={index}
          src={imagePath}
          alt={`Room service menu ${index + 1}`}
          style={{ width: "100%", height: "auto" }}
        />
      ))}
    </div>
  );
};

export default RoomServiceMenu;

// import React from "react";
// import ImageFlipBook from "./ImageFlipBook";

// const roomServiceMenuImages = [
//   "/flipbook/img/room-service-menu/1.jpg",
//   "/flipbook/img/room-service-menu/2.jpg",
//   "/flipbook/img/room-service-menu/3.jpg",
//   "/flipbook/img/room-service-menu/4.jpg",
//   "/flipbook/img/room-service-menu/5.jpg",
//   // Add more paths as needed
// ];

// const RoomServiceMenu = () => {
//   return <ImageFlipBook imagePaths={roomServiceMenuImages} />;
// };

// export default RoomServiceMenu;
