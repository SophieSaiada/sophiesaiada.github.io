import React from "react";
import "./ImagePreview.css";

export default ({ src, alt, width, leftOffset, blur }) => (
  <a href={src} target="_blank" rel="noopener noreferrer">
    <div className="preview-image-container">
      <img
        className="preview-image"
        src={src}
        alt={alt}
        style={{
          left: leftOffset || "-5%",
          width: width || "110%",
          filter: `blur(${blur || "4px"})`
        }}
      />
    </div>
  </a>
);
