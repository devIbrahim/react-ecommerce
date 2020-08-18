import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, className, history, linkUrl, match }) => (
  <div
    className={`menu-item ${className}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{
        background: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="background-image"
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
