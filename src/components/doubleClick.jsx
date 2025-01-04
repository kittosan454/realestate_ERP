import React, { useState } from "react";

const EditableParagraph = ({ terminaationNotice, onUpdate }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [value, setValue] = React.useState(terminaationNotice);

  // 더블 클릭시 해당 설정 변경
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditable(false);
    }
  };

  return isEditing ? (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  ) : (
    <p onDoubleClick={handleDoubleClick}>{props.terminationNotice}</p>
  );
};

export default EditableParagraph;
