import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "@mui/material";

const award = require("../Images/icons8-awards-96.png");
const starRating = require("../Images/icons8-rating-48.png");
const docImage = require("../Images/icons8-doctor-64.png");
const shape1 = require("../Images/shape-1.png");
const childImage = require("../Images/about-1.jpg");
function SecondSection() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const isLaptop = useMediaQuery("(max-width:1250px)");

  return !isMobile && !isLaptop ? (
    <div>
      <div
        style={{
          flexDirection: "row",
          height: "800px",
          backgroundColor: "#f9f9f9",
          justifyContent: "center",
          alignItems: "center",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          fontFamily: "Jost",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",

            position: "relative",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "625px",
            }}
          >
            <img
              src={shape1}
              alt=""
              style={{
                position: "absolute",
                zIndex: 0,
                left: "170px",
                bottom: "-25px",
                width: "305px",
                height: "305px",
              }}
              class="blink-frame"
            />
            <div
              style={{ zIndex: 1, borderRadius: "100%", overflow: "hidden" }}
            >
              <img
                src={childImage}
                alt=""
                style={{ zIndex: 1, borderRadius: "100%" }}
                class="resize-frame"
              />
            </div>
            <div
              style={{
                zIndex: 2,
                position: "absolute",
                width: "150px",
                backgroundColor: "#f17732",
                padding: "40px 30px",
                textAlign: "center",
                borderRadius: "70px",
                boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.20)",
                color: "white",
                right: 150,
                bottom: -50,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              <div style={{ fontSize: 50, lineHeight: 1 }}>30</div>
              <div
                style={{ fontSize: 20, lineHeight: "28px", fontWeight: 500 }}
              >
                Years of Experience in This Field
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            width: "800px",
          }}
        >
          <div>
            <div
              style={{
                position: "relative",
                display: "inline-block",
                fontSize: "90px",
                lineHeight: "80px",
                fontWeight: 800,
                background:
                  "-webkit-linear-gradient(0deg, #f8ece3, #def4f1 100%)",
                color: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transform: "translate(-200px, 35px)",
                zIndex: 0,
              }}
            >
              Who We Are?
            </div>
            <div
              style={{ fontSize: 40, fontWeight: 700, position: "relative" }}
            >
              The Great Place Of Eye care
            </div>
            <div style={{ fontSize: 40, fontWeight: 700 }}>Hospital Center</div>
          </div>
          <div
            style={{
              position: "relative",
              color: "#6e6e6e",
              fontWeight: "400",
              margin: "0px",
              lineHeight: "28px",
              width: "600px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur excepteur sint occaecat.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 100,
              height: 180,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 700 }}>Our Mission</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  High-Quality work
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Straightforward pricing
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Rapid response times
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 700 }}>Our Mission</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Emergency power solutions
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Wiring and installation
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Full-service electrical layout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", height: 250, backgroundColor: "#f17732" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <img src={starRating} alt="" style={{ width: 100, height: 100 }} />
            <div style={{ textAlign: "center", color: "white" }}>
              <div
                style={{ fontSize: 55, fontWeight: 700, fontFamily: "Jost" }}
              >
                4.9
              </div>
              <div
                style={{ fontSize: 22, fontWeight: 500, fontFamily: "Jost" }}
              >
                Rating
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <img src={docImage} alt="" style={{ width: 100, height: 100 }} />
            <div style={{ textAlign: "center", color: "white" }}>
              <div
                style={{ fontSize: 55, fontWeight: 700, fontFamily: "Jost" }}
              >
                1K+
              </div>
              <div
                style={{ fontSize: 22, fontWeight: 700, fontFamily: "Jost" }}
              >
                Happy Patient
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <img src={award} alt="" style={{ width: 100, height: 100 }} />
            <div style={{ textAlign: "center", color: "white" }}>
              <div
                style={{ fontSize: 55, fontWeight: 700, fontFamily: "Jost" }}
              >
                10+
              </div>
              <div
                style={{ fontSize: 22, fontWeight: 700, fontFamily: "Jost" }}
              >
                Awards
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : !isLaptop ? (
    <div>
      <div
        style={{
          flexDirection: "row",
          height: "800px",
          backgroundColor: "#f9f9f9",
          justifyContent: "center",
          alignItems: "center",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          fontFamily: "Jost",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",

            position: "relative",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "625px",
            }}
          >
            <img
              src={shape1}
              alt=""
              style={{
                position: "absolute",
                zIndex: 0,
                left: "170px",
                bottom: "-25px",
                width: "305px",
                height: "305px",
              }}
              class="blink-frame"
            />
            <div
              style={{ zIndex: 1, borderRadius: "100%", overflow: "hidden" }}
            >
              <img
                src={childImage}
                alt=""
                style={{ zIndex: 1, borderRadius: "100%" }}
                class="resize-frame"
              />
            </div>
            <div
              style={{
                zIndex: 2,
                position: "absolute",
                width: "150px",
                backgroundColor: "#f17732",
                padding: "40px 30px",
                textAlign: "center",
                borderRadius: "70px",
                boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.20)",
                color: "white",
                right: 150,
                bottom: -50,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              <div style={{ fontSize: 50, lineHeight: 1 }}>30</div>
              <div
                style={{ fontSize: 20, lineHeight: "28px", fontWeight: 500 }}
              >
                Years of Experience in This Field
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            width: "800px",
          }}
        >
          <div>
            <div
              style={{
                position: "relative",
                display: "inline-block",
                fontSize: "90px",
                lineHeight: "80px",
                fontWeight: 800,
                background:
                  "-webkit-linear-gradient(0deg, #f8ece3, #def4f1 100%)",
                color: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transform: "translate(-200px, 35px)",
                zIndex: 0,
              }}
            >
              Who We Are?
            </div>
            <div
              style={{ fontSize: 40, fontWeight: 700, position: "relative" }}
            >
              The Great Place Of Eye care
            </div>
            <div style={{ fontSize: 40, fontWeight: 700 }}>Hospital Center</div>
          </div>
          <div
            style={{
              position: "relative",
              color: "#6e6e6e",
              fontWeight: "400",
              margin: "0px",
              lineHeight: "28px",
              width: "600px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur excepteur sint occaecat.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 100,
              height: 180,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 700 }}>Our Mission</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  High-Quality work
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Straightforward pricing
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Rapid response times
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 700 }}>Our Mission</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Emergency power solutions
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Wiring and installation
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Full-service electrical layout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", height: 250, backgroundColor: "#f17732" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <img src={starRating} alt="" style={{ width: 100, height: 100 }} />
            <div style={{ textAlign: "center", color: "white" }}>
              <div
                style={{ fontSize: 55, fontWeight: 700, fontFamily: "Jost" }}
              >
                4.9
              </div>
              <div
                style={{ fontSize: 22, fontWeight: 500, fontFamily: "Jost" }}
              >
                Rating
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <img src={docImage} alt="" style={{ width: 100, height: 100 }} />
            <div style={{ textAlign: "center", color: "white" }}>
              <div
                style={{ fontSize: 55, fontWeight: 700, fontFamily: "Jost" }}
              >
                1K+
              </div>
              <div
                style={{ fontSize: 22, fontWeight: 700, fontFamily: "Jost" }}
              >
                Happy Patient
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <img src={award} alt="" style={{ width: 100, height: 100 }} />
            <div style={{ textAlign: "center", color: "white" }}>
              <div
                style={{ fontSize: 55, fontWeight: 700, fontFamily: "Jost" }}
              >
                10+
              </div>
              <div
                style={{ fontSize: 22, fontWeight: 700, fontFamily: "Jost" }}
              >
                Awards
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div
        style={{
          flexDirection: "column",
          height: "fit-content",
          backgroundColor: "#f9f9f9",
          alignItems: "center",
          display: "grid",
          gridTemplateRows: "1fr 1fr",
          fontFamily: "Jost",
          padding: "50px 10px",
        }}
      >
        <div
          style={{
            display: "flex",

            position: "relative",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "inline-block",
                fontSize: "40px",
                lineHeight: "80px",
                fontWeight: 800,
                background:
                  "-webkit-linear-gradient(0deg, #d6baa5, #afe4dd 100%)",
                color: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                zIndex: 0,
              }}
            >
              <span style={{ whiteSpace: "nowrap" }}>Why Choose Us?</span>
            </div>
            <img
              src={shape1}
              alt=""
              style={{
                position: "absolute",
                zIndex: 0,
                bottom: 200,
                width: 150,
              }}
              class="blink-frame"
            />
            <div style={{ zIndex: 1, overflow: "hidden" }}>
              <img
                src={childImage}
                alt=""
                style={{
                  zIndex: 1,
                  borderRadius: "100%",
                  objectFit: "cover",
                  width: 300,
                }}
                class="resize-frame"
              />
            </div>
            <div
              style={{
                width: "300px",
                backgroundColor: "#f17732",
                padding: "40px 30px",
                textAlign: "center",
                borderRadius: "70px",
                boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.20)",
                color: "white",
                bottom: -100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "24px",
                fontWeight: 700,
                marginTop: 50,
              }}
            >
              <div style={{ fontSize: 50, lineHeight: 1 }}>30</div>
              <div
                style={{ fontSize: 20, lineHeight: "28px", fontWeight: 500 }}
              >
                Years of Experience in This Field
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                position: "relative",
                color: "black",
              }}
            >
              The Great Place Of Eye care
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: "black" }}>
              Hospital Center
            </div>
          </div>
          <div
            style={{
              color: "#6e6e6e",
              fontWeight: "400",
              margin: "0px",
              lineHeight: "24px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur excepteur sint occaecat.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                gap: 5,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 700, color: "black" }}>
                Our Mission
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  High-Quality work
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Straightforward pricing
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Rapid response times
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 700, color: "black" }}>
                Our Vision
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Emergency power solutions
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Wiring and installation
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCheck} style={{ color: "#f17732" }} />
                <div
                  style={{ fontSize: 16, color: "#6e6e6e", fontWeight: 500 }}
                >
                  Full-service electrical layout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", height: 550, backgroundColor: "#f17732" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <img src={starRating} alt="" style={{ width: 100, height: 100 }} />
            <div style={{ textAlign: "center", color: "white" }}>
              <div
                style={{ fontSize: 55, fontWeight: 700, fontFamily: "Jost" }}
              >
                4.9
              </div>
              <div
                style={{ fontSize: 22, fontWeight: 500, fontFamily: "Jost" }}
              >
                Rating
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <img src={docImage} alt="" style={{ width: 100, height: 100 }} />
            <div style={{ textAlign: "center", color: "white" }}>
              <div
                style={{ fontSize: 55, fontWeight: 700, fontFamily: "Jost" }}
              >
                1K+
              </div>
              <div
                style={{ fontSize: 22, fontWeight: 700, fontFamily: "Jost" }}
              >
                Happy Patient
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <img src={award} alt="" style={{ width: 100, height: 100 }} />
            <div style={{ textAlign: "center", color: "white" }}>
              <div
                style={{ fontSize: 55, fontWeight: 700, fontFamily: "Jost" }}
              >
                10+
              </div>
              <div
                style={{ fontSize: 22, fontWeight: 700, fontFamily: "Jost" }}
              >
                Awards
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
