import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "purple",
      }}
    >
      <p onClick={() => navigate("/")}>Home</p>
      <p onClick={() => navigate("/favori")}>Favorite</p>
      <p onClick={() => navigate("/about_page")}>ABout Us</p>
      <p onClick={() => navigate("/contact")}>Contact Us</p>
    </div>
  );
};

export default Navbar;
