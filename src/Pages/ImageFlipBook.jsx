import React from "react";
import HTMLFlipBook from "react-pageflip";

class ImageFlipBook extends React.Component {
  render() {
    const { imagePaths } = this.props; // Use imagePaths from props

    return (
      <div className="flipbook-container">
        <HTMLFlipBook
          width={300}
          height={400}
          minWidth={100}
          maxWidth={500}
          minHeight={100}
          maxHeight={700}
          size="stretch"
          mobileScrollSupport={false}
          showCover={true}
          maxShadowOpacity={0.5}
          style={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
          {imagePaths.map((path, index) => (
            <div key={index} className="demoPage">
              <img
                src={path}
                alt={`Page ${index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    );
  }
}

export default ImageFlipBook;
