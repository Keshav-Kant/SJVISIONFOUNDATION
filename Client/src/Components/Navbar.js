import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
function Navbar() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const isLaptop = useMediaQuery("(max-width:1250px)");

  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isDoctorsHovered, setIsDoctorsHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isFindUsHovered, setIsFindUsHovered] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => {
    sideBar === true ? setSideBar(false) : setSideBar(true);
  };
  return !isLaptop && !isMobile ? (
    <div style={styles.container}>
      <div style={styles.logoAndName}>
        <img src={require("../Images/SJ_VISION_LOGO_MAIN.png")} alt="" />
        <div style={{ fontSize: 16, fontWeight: 700 }}>
          SJ VISION FOUNDATION
        </div>
      </div>
      <div style={styles.navItem}>
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: isHomeHovered ? "rgb(3, 192, 180)" : "black",
          }}
          onMouseEnter={() => setIsHomeHovered(true)}
          onMouseLeave={() => setIsHomeHovered(false)}
        >
          Home
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: isAboutHovered ? "rgb(3, 192, 180)" : "black",
          }}
          onMouseEnter={() => setIsAboutHovered(true)}
          onMouseLeave={() => setIsAboutHovered(false)}
        >
          About us
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: isDoctorsHovered ? "rgb(3, 192, 180)" : "black",
          }}
          onMouseEnter={() => setIsDoctorsHovered(true)}
          onMouseLeave={() => setIsDoctorsHovered(false)}
        >
          Doctors
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: isContactHovered ? "rgb(3, 192, 180)" : "black",
          }}
          onMouseEnter={() => setIsContactHovered(true)}
          onMouseLeave={() => setIsContactHovered(false)}
        >
          Contact
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: isFindUsHovered ? "rgb(3, 192, 180)" : "black",
          }}
          onMouseEnter={() => setIsFindUsHovered(true)}
          onMouseLeave={() => setIsFindUsHovered(false)}
        >
          Find us
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "#03c0b4",
            padding: "17px 45px",
            borderRadius: 50,
            color: "#fff",
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          Appointment
        </div>
      </div>
    </div>
  ) : !isMobile ? (
    <div style={styles.container}>
      <div style={styles.logoAndName}>
        <img src={require("../Images/SJ_VISION_LOGO_MAIN.png")} alt="" />
        <div style={{ fontSize: 16, fontWeight: 700 }}>
          SJ VISION FOUNDATION
        </div>
      </div>
      <div style={styles.navItem}>
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: isHomeHovered ? "rgb(3, 192, 180)" : "black",
          }}
          onMouseEnter={() => setIsHomeHovered(true)}
          onMouseLeave={() => setIsHomeHovered(false)}
        >
          Home
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: isAboutHovered ? "rgb(3, 192, 180)" : "black",
          }}
          onMouseEnter={() => setIsAboutHovered(true)}
          onMouseLeave={() => setIsAboutHovered(false)}
        >
          About us
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: isDoctorsHovered ? "rgb(3, 192, 180)" : "black",
          }}
          onMouseEnter={() => setIsDoctorsHovered(true)}
          onMouseLeave={() => setIsDoctorsHovered(false)}
        >
          Doctors
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: isContactHovered ? "rgb(3, 192, 180)" : "black",
          }}
          onMouseEnter={() => setIsContactHovered(true)}
          onMouseLeave={() => setIsContactHovered(false)}
        >
          Contact
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: isFindUsHovered ? "rgb(3, 192, 180)" : "black",
          }}
          onMouseEnter={() => setIsFindUsHovered(true)}
          onMouseLeave={() => setIsFindUsHovered(false)}
        >
          Find us
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "#03c0b4",
            padding: "17px 45px",
            borderRadius: 50,
            color: "#fff",
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          Appointment
        </div>
      </div>
    </div>
  ) : (
    <div
      style={{
        height: 80,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 5,
          flexDirection: "row",
          padding: "0px 10px",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img
          src={require("../Images/SJ_VISION_LOGO_MAIN.png")}
          alt="logo"
          style={{ width: 60 }}
        />
        <div
          style={{
            fontSize: 25,
            fontWeight: 900,
            letterSpacing: 1.2,
            color: "black",
          }}
        >
          SJVF
        </div>
      </div>
      {sideBar === false ? (
        <div
          style={{
            paddingRight: 30,
            height: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          onClick={handleSideBar}
        >
          <div style={{ borderTop: "4px solid black", width: 45 }}></div>
          <div style={{ borderTop: "4px solid black", width: 45 }}></div>
          <div style={{ borderTop: "4px solid black", width: 45 }}></div>
        </div>
      ) : (
        <div>
          <div
            style={{
              width: "55vw",
              backgroundColor: "black",
              opacity: 0.6,
              zIndex: 2,
              height: "100vh",
              left: 0,
              top: 0,
              position: "fixed",
            }}
          ></div>
          <div
            style={{
              width: "45vw",
              height: "100vh",
              backgroundColor: "rgb(23 26 26)",
              position: "fixed",
              right: 0,
              zIndex: 2,
              top: 0,
              display: "flex",
              flexDirection: "column",
              padding: "50px 0px",
              alignItems: "center",
              paddingTop: "100px",
            }}
          >
            <div
              style={{
                padding: "20px 0",
                color: "white",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              Home
            </div>
            <div
              style={{
                padding: "20px 0",
                color: "white",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              About us
            </div>
            <div
              style={{
                padding: "20px 0",
                color: "white",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              Contact
            </div>
            <div
              style={{
                padding: "20px 0",
                color: "white",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              Find us
            </div>
          </div>

          <div
            style={{
              paddingRight: 10,
              height: 50,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",

              top: 15,
              right: 0,
              zIndex: 3,
              color: "white",
              position: "fixed",
            }}
            onClick={handleSideBar}
          >
            <CloseIcon style={{ width: 40, height: 40 }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 100,
    backgroundColor: "#fff",
    fontFamily: "Jost",
    boxShadow: "0px 20px 30px 0px rgba(0, 0, 0, 0.05)",
  },
  logoAndName: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  navItem: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
};
