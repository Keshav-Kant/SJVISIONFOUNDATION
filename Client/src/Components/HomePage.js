import React from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlasses,
  faUser,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";
import "../Components/styles.css";
import BenefitBox from "./BenefitBox";
import { useMediaQuery } from "@mui/material";

const shape2 = require("../Images/shape-2.png");
const shape3 = require("../Images/shape-3.png");
const childImage = require("../Images/ChildImage.png");
const shape1 = require("../Images/shape-1.png");
const docImage = require("../Images/doctor.png");
const microscopeImage = require("../Images/microscope.png");
const ambulance = require("../Images/ambulance.png");
const ClinicChair = require("../Images/clinic.png");
function HomePage() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const isLaptop = useMediaQuery("(max-width:1250px)");

  return !isMobile && !isLaptop ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "1300px",
        backgroundColor: "#f9f9f9",
        fontFamily: "Jost",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
          overflow: "hidden",
          fontFamily: "Jost",
          position: "relative",
        }}
      >
        <img
          src={shape2}
          alt=""
          style={{ position: "absolute", left: 0, top: 0 }}
        />
        <img
          src={shape3}
          alt=""
          style={{ position: "absolute", left: 0, top: 0 }}
          class='vibrate-2'/>
        <div style={{ width: 750 }}>
          <div
            style={{ fontSize: 24, color: "#fd7e14", fontWeight: 500 }}
            class="tracking-in-expand"
          >
            SJ VISION FOUNDATION
          </div>
          <div
            style={{ fontSize: 65, fontWeight: 600 }}
            class="tracking-in-expand"
          >
            Eye Care & Holistic
          </div>
          <div
            style={{ fontSize: 65, fontWeight: 600 }}
            class="tracking-in-expand"
          >
            Health Center
          </div>
          <div
            style={{
              fontSize: 16,
              width: 550,
              fontWeight: 500,
            }}
          >
            We solve all your eye care needs by providing personalized and
            holistic eye care for you and your family!
          </div>
          <div
            style={{
              height: 80,
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                backgroundColor: "#03c0b4",
                padding: "17px 45px",
                borderRadius: 50,
                color: "#fff",
                fontWeight: 500,
                fontSize: 18,
                width: "fit-content",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              class="jello-horizontal"
            >
              Contact Now
            </div>
          </div>
          <div style={{ display: "flex", gap: 50, marginTop: 20 }}>
            <div
              style={{
                padding: 20,
                boxShadow: "3px 3px 1px 0px #03c0b4",
                borderRadius: "100%",
              }}class='bounce-in-top'
            >
              <RemoveRedEyeOutlinedIcon style={{ fontSize: 50 }} />
            </div>
            <div
              style={{
                padding: 20,
                boxShadow: "3px 3px 1px 0px #03c0b4",
                borderRadius: "100%",
              }}class='bounce-in-top'
            >
              <FontAwesomeIcon icon={faHospital} style={{ fontSize: 50 }} />
            </div>
            <div
              style={{
                padding: 20,
                boxShadow: "3px 3px 1px 0px #03c0b4",
                borderRadius: "100%",
              }}class='bounce-in-top'
            >
              <FontAwesomeIcon icon={faGlasses} style={{ fontSize: 50 }} />
            </div>
            <div
              style={{
                padding: 20,
                boxShadow: "3px 3px 1px 0px #03c0b4",
                borderRadius: "100%",
              }}class='bounce-in-top'
            >
              <FontAwesomeIcon icon={faUser} style={{ fontSize: 50 }} />
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", height: "100%", alignItems: "flex-end" }}
        >
          <div style={{ position: "relative", height: 450, width: 450 }}>
            <img
              src={shape1}
              alt="shape"
              style={{ position: "absolute", right: -120, top: -100 }}
              class="blink-frame"
            />
            <div
              style={{
                backgroundColor: "#fd7e14",
                height: "100%",
                width: "100%",
                borderTopLeftRadius: "100%",
                borderTopRightRadius: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <img
                src={childImage}
                alt=""
                style={{
                  width: 750, // Adjust the width as needed
                  height: 550, // Adjust the height as needed
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "1250px",
            position: "relative",
            zIndex: 1,
            borderRadius: 30,
            boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.10)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "550px",
          }}
          
        >
          <div style={{ fontSize: 50, lineHeight: 2 }}>
            Benefits with Opt Care
          </div>
          <div style={{ width: 600, textAlign: "center", marginBottom: 25 }}>
            Optimal care means getting the best treatment tailored to you,
            making sure it works well, costs less, and keeps you healthy.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              gap: 25,
              padding: "0 25px",
            }}
            
          >
            <BenefitBox
              image={docImage}
              benefitTitle="Qualified Doctors"
              benefitDescription="Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore."
            />
            <BenefitBox
              image={microscopeImage}
              benefitTitle="Modern Equipment"
              benefitDescription="Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore."
            />
            <BenefitBox
              image={ambulance}
              benefitTitle="Emergency Help"
              benefitDescription="Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore."
            />
            <BenefitBox
              image={ClinicChair}
              benefitTitle="Individual Approach"
              benefitDescription="Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore."
            />
          </div>
        </div>
        <img
          src={shape1}
          alt="shape"
          style={{ position: "absolute", left: 200, top: -80, width: 200 }}
          className="blink-frame"
        />
      </div>
    </div>
  ) : !isMobile ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "1300px",
        backgroundColor: "#f9f9f9",
        fontFamily: "Jost",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
          overflow: "hidden",
          fontFamily: "Jost",
          position: "relative",
        }}
      >
        <img
          src={shape2}
          alt=""
          style={{ position: "absolute", left: 0, top: 0 }}
        />
        <img
          src={shape3}
          alt=""
          style={{ position: "absolute", left: 0, top: 0 }}
        />
        <div style={{ width: 750 }}>
          <div style={{ fontSize: 24, color: "#fd7e14", fontWeight: 500 }}>
            SJ VISION FOUNDATION
          </div>
          <div style={{ fontSize: 65, fontWeight: 600 }}>
            Eye Care & Holistic
          </div>
          <div style={{ fontSize: 65, fontWeight: 600 }}>Health Center</div>
          <div
            style={{
              fontSize: 16,
              width: 550,
              fontWeight: 500,
            }}
          >
            We solve all your eye care needs by providing personalized and
            holistic eye care for you and your family!
          </div>
          <div
            style={{
              height: 80,
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                backgroundColor: "#03c0b4",
                padding: "17px 45px",
                borderRadius: 50,
                color: "#fff",
                fontWeight: 500,
                fontSize: 18,
                width: "fit-content",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Contact Now
            </div>
          </div>
          <div style={{ display: "flex", gap: 50, marginTop: 20 }}>
            <div
              style={{
                padding: 20,
                boxShadow: "3px 3px 1px 0px #03c0b4",
                borderRadius: "100%",
              }}
            >
              <RemoveRedEyeOutlinedIcon style={{ fontSize: 50 }} />
            </div>
            <div
              style={{
                padding: 20,
                boxShadow: "3px 3px 1px 0px #03c0b4",
                borderRadius: "100%",
              }}
            >
              <FontAwesomeIcon icon={faHospital} style={{ fontSize: 50 }} />
            </div>
            <div
              style={{
                padding: 20,
                boxShadow: "3px 3px 1px 0px #03c0b4",
                borderRadius: "100%",
              }}
            >
              <FontAwesomeIcon icon={faGlasses} style={{ fontSize: 50 }} />
            </div>
            <div
              style={{
                padding: 20,
                boxShadow: "3px 3px 1px 0px #03c0b4",
                borderRadius: "100%",
              }}
            >
              <FontAwesomeIcon icon={faUser} style={{ fontSize: 50 }} />
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", height: "100%", alignItems: "flex-end" }}
        >
          <div style={{ position: "relative", height: 450, width: 450 }}>
            <img
              src={shape1}
              alt="shape"
              style={{ position: "absolute", right: -120, top: -100 }}
              class="blink-frame"
            />
            <div
              style={{
                backgroundColor: "#fd7e14",
                height: "100%",
                width: "100%",
                borderTopLeftRadius: "100%",
                borderTopRightRadius: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <img
                src={childImage}
                alt=""
                style={{
                  width: 750, // Adjust the width as needed
                  height: 550, // Adjust the height as needed
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "95vw",
            position: "relative",
            zIndex: 1,
            borderRadius: 30,
            boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.10)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "fit-content",
            paddingBottom: 20
          }}
        >
          <div style={{ fontSize: 50, lineHeight: 2 }}>
            Benefits with Opt Care
          </div>
          <div style={{ width: 600, textAlign: "center", marginBottom: 25 }}>
            Optimal care means getting the best treatment tailored to you,
            making sure it works well, costs less, and keeps you healthy.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              gap: 15,
              padding: "0 20px",
            }}
          >
            <BenefitBox
              image={docImage}
              benefitTitle="Qualified Doctors"
              benefitDescription="Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore."
            />
            <BenefitBox
              image={microscopeImage}
              benefitTitle="Modern Equipment"
              benefitDescription="Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore."
            />
            <BenefitBox
              image={ambulance}
              benefitTitle="Emergency Help"
              benefitDescription="Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore."
            />
            <BenefitBox
              image={ClinicChair}
              benefitTitle="Individual Approach"
              benefitDescription="Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore."
            />
          </div>
        </div>
        <img
          src={shape1}
          alt="shape"
          style={{ position: "absolute", left: 200, top: -80, width: 200 }}
          className="blink-frame"
        />
      </div>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f9f9f9",
        fontFamily: "Jost",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          overflow: "hidden",
          fontFamily: "Jost",
          position: "relative",
          padding: "60px 20px",
        }}
      >
        <img
          src={shape2}
          alt="shade"
          style={{ position: "absolute", left: 0, top: 0 }}
        />

        <div style={{ width: "100%" }}>
          <div
            style={{
              fontSize: 24,
              color: "#fd7e14",
              fontWeight: 500,
              width: "80vw",
            }}
          >
            SJ VISION FOUNDATION
          </div>
          <div style={{ fontSize: 40, fontWeight: 600, color: "black" }}>
            Eye Care &
          </div>
          <div style={{ fontSize: 40, fontWeight: 600, color: "black" }}>
            Holistic Health
          </div>
          <div style={{ fontSize: 40, fontWeight: 600, color: "black" }}>
            Center
          </div>
          <div
            style={{
              fontSize: 16,
              width: "40vh",
              fontWeight: 500,
            }}
          >
            We solve all your eye care needs by providing personalized and
            holistic eye care for you and your family!
          </div>
          <div
            style={{
              height: 80,
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                backgroundColor: "#03c0b4",
                padding: "17px 45px",
                borderRadius: 50,
                color: "#fff",
                fontWeight: 500,
                fontSize: 18,
                width: "fit-content",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Contact Now
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "80vw",
            position: "relative",
            zIndex: 1,
            borderRadius: 30,
            boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.10)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.2,
              padding: "80px 50px 10px",
              textAlign: "center",
            }}
          >
            Benefits with Opt Care
          </div>
          <div
            style={{
              width: "60vw",
              textAlign: "center",
              marginBottom: 25,
              fontSize: 18,
              lineHeight: 1.3,
              letterSpacing: 0.01,
            }}
          >
            Optimal care means getting the best treatment tailored to you,
            making sure it works well, costs less, and keeps you healthy.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 25,
              padding: "0 25px 28px",
            }}
          >
            <BenefitBox
              image={docImage}
              benefitTitle="Qualified Doctors"
              benefitDescription="Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore."
            />
            <BenefitBox
              image={microscopeImage}
              benefitTitle="Modern Equipment"
              benefitDescription="Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore."
            />
            <BenefitBox
              image={ambulance}
              benefitTitle="Emergency Help"
              benefitDescription="Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore."
            />
            <BenefitBox
              image={ClinicChair}
              benefitTitle="Individual Approach"
              benefitDescription="Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore."
            />
          </div>
        </div>
        <img
          src={shape1}
          alt="shape"
          style={{ position: "absolute", left: 0, top: -50, width: 140 }}
          className="blink-frame"
        />
      </div>
    </div>
  );
}

export default HomePage;
