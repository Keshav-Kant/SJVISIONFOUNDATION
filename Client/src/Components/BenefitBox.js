import React from "react";
import "../Components/styles.css";

function BenefitBox(props) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        background: "#f6f7f8",
        borderRadius: 20,
        padding: "75px 40px",
        display: "flex",
        flexDirection: "column",
        gap: 15,
        fontFamily: "Jost",
      }}
      class="YMovement-frame"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <img src={props.image} style={{ width: 50 }} alt="icons" />
      </div>
      <div
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "black",
          color: isHovered ? "rgb(253, 126, 20)" : "black",
        }}
      >
        {props.benefitTitle}
      </div>
      <div style={{ fontSize: 16, fontWeight: 400 }}>
        {props.benefitDescription}
      </div>
    </div>
  );
}

export default BenefitBox;
