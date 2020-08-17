import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, className }) => (
  <div
    className={`menu-item ${size} ${className}`}
    style={{
      background: `url(${imageUrl})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
