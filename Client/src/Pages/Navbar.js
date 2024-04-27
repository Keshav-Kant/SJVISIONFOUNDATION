import React from "react";
import NavbarComponent from "../Components/NavbarComponent";
import { useMediaQuery } from "@mui/material";
function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <NavbarComponent isMobileView={isMobile} />
  );
}

export default Navbar;
