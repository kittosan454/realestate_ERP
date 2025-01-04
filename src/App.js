import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/customer";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />{" "}
          {/* 상황판 경로 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
