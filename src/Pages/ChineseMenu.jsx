import React from "react";

const chineseMenuImages = [
  "/flipbook/img/chinese-menu/1.png",
  "/flipbook/img/chinese-menu/2.jpg",
  "/flipbook/img/chinese-menu/3.jpg",
  // Add more paths as needed
];

const ChineseMenu = () => {
  return (
    <div style={{ width: "100%", paddingTop: "1vh" }}>
      {chineseMenuImages.map((imagePath, index) => (
        <img
          key={index}
          src={imagePath}
          alt={`Chinese menu ${index + 1}`}
          style={{ width: "100%", height: "auto" }}
        />
      ))}
    </div>
  );
};

export default ChineseMenu;
// import React from "react";
// import ImageFlipBook from "./ImageFlipBook";

// const chineseMenuImages = [
//   "/flipbook/img/chinese-menu/1.png",
//   "/flipbook/img/chinese-menu/2.jpg",
//   "/flipbook/img/chinese-menu/3.jpg",
//   // Add more paths as needed
// ];

// const ChineseMenu = () => {
//   return <ImageFlipBook imagePaths={chineseMenuImages} />;
// };

// export default ChineseMenu;
