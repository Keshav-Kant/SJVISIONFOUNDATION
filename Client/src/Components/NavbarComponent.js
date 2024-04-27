import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Login from "./Login";
import Register from "./Register";

// Modal Component
// Modal Component
const Modal = ({ isOpen, onClose, selectedType, handleType }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: isOpen ? "block" : "none",
        zIndex: 5,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: 500,
          padding: 20,
          borderRadius: 10,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: '3px solid rgb(3, 192, 180)',
          maxWidth: '90vw',
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <CloseIcon onClick={onClose} />
        </div>

        <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            <div onClick={() => handleType("login")}>Login</div>
            <div onClick={() => handleType("register")}>Register</div>
          </div>

          <div
            style={{
              width: "100%",
              height: 1.2,
              backgroundColor: "#DEDEDE",
              display: "flex",
              flexDirection: "row",
              gap: 15,
            }}
          >
            <div
              style={{
                width: 65,
                height: 1.2,
                backgroundColor: selectedType === 'login'?"rgb(3, 192, 180)":'#DEDEDE',
              }}
            ></div>
            <div
              style={{
                width: 90,
                height: 1.2,
                backgroundColor: selectedType === 'register'?"rgb(3, 192, 180)":'#DEDEDE',
              }}
            ></div>
          </div>
          {selectedType === "login" ? (
            <div style={{}}>
              <Login />
            </div>
          ) : (
            <div style={{}}>
              <Register />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


function NavbarComponent({ isMobileView }) {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isDoctorsHovered, setIsDoctorsHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isFindUsHovered, setIsFindUsHovered] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("login");

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleType = (type) => {
    setSelectedType(type);
  };
  return !isMobileView ? (
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
          onClick={handleModal}
        >
          Log in/Sign up
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModal}
        selectedType={selectedType}
        handleType={handleType}
      />
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

export default NavbarComponent;

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
