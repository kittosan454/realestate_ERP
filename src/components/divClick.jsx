import React, { useState } from "react";

const ClickableDiv = () => {
  const [bgColor, setBgColor] = useState(null);

  const toggleColor = () => {
    const newColor = bgColor === null ? "#ffcccb" : null; //색상 토글
    setBgColor(newColor);
  };

  return [bgColor, toggleColor];
};

export default ClickableDiv;
