import React, { useEffect, useState } from "react";

const PClick = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [isRed, setIsRed] = useState(false);
  const [hasExecuted, setHasExecuted] = useState(false);

  const handleMouseOver = (event) => {
    if (event.target.tagName === "P" && event.target.closest(".scroll-body")) {
      setHoveredElement(event.target);
    }
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "q" && hoveredElement) {
      if (isRed) {
        setIsRed(false); // 빨간색 상태 변경 -> 렌더링 유도
        setHasExecuted(true);
      } else {
        setIsRed(true);
        setHasExecuted(true);
      }
    }
  };

  // 마우스 오버 이벤트 등록
  useEffect(() => {
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("keydown", handleKeyDown);
    console.log(hoveredElement);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hoveredElement]); //hoveredElement 가 변하면 listener 실행한다.

  // hoveredElement나 isRed 상태가 변경될 때 스타일 적용
  useEffect(() => {
    if (hoveredElement && hasExecuted) {
      // hoveredElement.style.color = isRed ? "red" : "";
      hoveredElement.style.backgroundColor =
        hoveredElement.style.backgroundColor === "red" ? "" : "red";
      setHasExecuted(false);
    }
  }, [isRed]); // 이 상태 값이 변경될 때만 스타일 반영

  return [hoveredElement, setHoveredElement];
};

export default PClick;
