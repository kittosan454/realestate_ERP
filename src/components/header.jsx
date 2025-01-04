import React from "react";
import "../Header.css"; // 스타일을 분리할 경우
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>전세임대 ERP</h1>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/dashboard">상황판</Link>
          </li>
          <li>
            <Link to="/">해지 관리 내용</Link>
          </li>
          <li>
            <a href="#services">기안문 생성</a>
          </li>
          <li>
            <a href="#contact">특이사항 기록</a>
          </li>
          <li>
            <a href="#help">도움말 게시판</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
