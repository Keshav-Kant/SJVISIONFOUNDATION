import React from "react";
import chooseUsBackground from "../Images/chooseus-bg.jpg";
import { useMediaQuery } from "@mui/material";
function ThirdPage() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const isLaptop = useMediaQuery("(max-width:1250px)");



  return (
    !isLaptop && !isMobile ?(
    <div
      style={{
        height: 700,
        fontFamily: "Jost",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: `url(${chooseUsBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "1000px", height: "100%" }}></div>
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
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
                transform: "translate(-240px, 20px)",
                zIndex: 0,
              }}
            >
              <span style={{ whiteSpace: "nowrap" }}>Why Choose Us?</span>
            </div>
            <div
              style={{
                fontSize: 40,
                fontWeight: 700,
                position: "relative",
                lineHeight: "20px",
              }}
            >
              Great Reasons For People
            </div>
            <div style={{ fontSize: 40, fontWeight: 700 }}>Choose Optcare</div>
          </div>
          <div
            style={{
              position: "relative",
              color: "#6e6e6e",
              fontWeight: "400",
              margin: "0px",
              lineHeight: "28px",
              width: 600,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt labore aliqua
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
              <div style={{ fontSize: 20, fontWeight: 600 }}>Quality Staff</div>
              <div
                style={{
                  width: 250,
                  color: "rgb(0,0,0,0.7)",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Lorem ipsum dolor amet conadicing sed do usmod tempor.
              </div>

              <div style={{ fontSize: 20, fontWeight: 600 }}>
                Affordable Price
              </div>
              <div
                style={{
                  width: 250,
                  color: "rgb(0,0,0,0.7)",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Lorem ipsum dolor amet conadicing sed do usmod tempor.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 600 }}>
                Quality Assistance
              </div>
              <div
                style={{
                  width: 250,
                  color: "rgb(0,0,0,0.7)",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Lorem ipsum dolor amet conadicing sed do usmod tempor.
              </div>

              <div style={{ fontSize: 20, fontWeight: 600 }}>
                Optimized Solutions
              </div>
              <div
                style={{
                  width: 250,
                  color: "rgb(0,0,0,0.7)",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Lorem ipsum dolor amet conadicing sed do usmod tempor.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ):!isMobile?(

      
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            flexDirection: "column",
            alignItems : 'center'
          }}
        >
            <div
              style={{
                position: "relative",
                display: "inline-block",
                fontSize: "90px",
                fontWeight: 800,
                background:
                  "-webkit-linear-gradient(0deg, #f8ece3, #def4f1 100%)",
                color: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                zIndex: 0,
              }}
            >
              <span style={{ whiteSpace: "nowrap" }}>Why Choose Us?</span>
            </div>
            <div
              style={{
                fontSize: 40,
                fontWeight: 700,
                position: "relative",
                lineHeight: "20px",
              }}
            >
              Great Reasons For People
            </div>
            <div style={{ fontSize: 40, fontWeight: 700 }}>Choose Optcare</div>
          
          <div
            style={{
              position: "relative",
              color: "#6e6e6e",
              fontWeight: "400",
              margin: "0px",
              lineHeight: "28px",
              width: 600,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt labore aliqua
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
              <div style={{ fontSize: 20, fontWeight: 600 }}>Quality Staff</div>
              <div
                style={{
                  width: 250,
                  color: "rgb(0,0,0,0.7)",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Lorem ipsum dolor amet conadicing sed do usmod tempor.
              </div>

              <div style={{ fontSize: 20, fontWeight: 600 }}>
                Affordable Price
              </div>
              <div
                style={{
                  width: 250,
                  color: "rgb(0,0,0,0.7)",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Lorem ipsum dolor amet conadicing sed do usmod tempor.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 600 }}>
                Quality Assistance
              </div>
              <div
                style={{
                  width: 250,
                  color: "rgb(0,0,0,0.7)",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Lorem ipsum dolor amet conadicing sed do usmod tempor.
              </div>

              <div style={{ fontSize: 20, fontWeight: 600 }}>
                Optimized Solutions
              </div>
              <div
                style={{
                  width: 250,
                  color: "rgb(0,0,0,0.7)",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Lorem ipsum dolor amet conadicing sed do usmod tempor.
              </div>
            </div>
          </div>
        </div>
    ):(
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            flexDirection: "column",
            padding: '20px 20px'
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
          <div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                position: "relative",
                lineHeight: 1,
                width: '300px'
              }}
            >
              Great Reasons For People Choose 
            </div>
            <div style={{ fontSize: 30, fontWeight: 700,lineHeight: 1, }}>Optcare</div>
          </div>
          <div
            style={{
              position: "relative",
              color: "#6e6e6e",
              fontWeight: "400",
              margin: "0px",
              lineHeight: "28px",
              width: 300,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt labore aliqua
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",gap: 10,
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 600 }}>Quality Staff</div>
              <div
                style={{
                  width: 250,
                  color: "rgb(0,0,0,0.7)",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Lorem ipsum dolor amet conadicing sed do usmod tempor.
              </div>

              <div style={{ fontSize: 20, fontWeight: 600 }}>
                Affordable Price
              </div>
              <div
                style={{
                  width: 250,
                  color: "rgb(0,0,0,0.7)",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Lorem ipsum dolor amet conadicing sed do usmod tempor.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",gap: 10,
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 600 }}>
                Quality Assistance
              </div>
              <div
                style={{
                  width: 250,
                  color: "rgb(0,0,0,0.7)",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Lorem ipsum dolor amet conadicing sed do usmod tempor.
              </div>

              <div style={{ fontSize: 20, fontWeight: 600 }}>
                Optimized Solutions
              </div>
              <div
                style={{
                  width: 250,
                  color: "rgb(0,0,0,0.7)",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Lorem ipsum dolor amet conadicing sed do usmod tempor.
              </div>
            </div>
          </div>
        </div>
    )
  );
}

export default ThirdPage;
