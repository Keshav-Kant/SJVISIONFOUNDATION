import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // Corrected import statement
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useMediaQuery } from '@mui/material';





function DetailBar() {


  const isMobile = useMediaQuery('(max-width:768px)');
  const isLaptop = useMediaQuery('(max-width:1250px)');



  return (
    !isMobile && !isLaptop? (
    <div style={{ backgroundColor: "#111821",height:50,alignItems:'center',display:'flex',justifyContent:'space-evenly',
    fontFamily:'Jost' }}>
      <div style={{ display: "flex", flexDirection: "row",gap:20 }}>
        <div style={{display:'flex',flexDirection:'row',gap:2}}>
          <EmailOutlinedIcon style={{ color: "grey" }} />
          <div style={{ color: "white",}} >Email: sample@example.com</div>
        </div>
        <div style={{display:'flex',flexDirection:'row',gap:2}}>
          <LocationOnOutlinedIcon style={{ color: "grey" }} />
          <div style={{ color: "white" }}>Road no.3 Juran Chapra, Muz</div>
        </div>
        <div style={{display:'flex',flexDirection:'row',gap:2}}>
        <LocalPhoneIcon style={{ color: "grey" }}/>
          <div style={{ color: "white"}}>Call: +91-0123456789</div>
        </div>
        
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:15}} >
        <div style={{display:'flex',gap:2,justifyContent:'center',}}>
          <AccessTimeIcon style={{ color: "grey" }} />
          <div style={{color:'#fff',fontSize:16,fontWeight:500}}>Mon-Fri 08:00AM-05:00PM</div>
        </div>
        <div style={{display:'flex',gap:20,justifyContent:'center',alignItems:'center'}}>
        <FacebookOutlinedIcon style={{ color: "white" }}/>
        <TwitterIcon style={{ color: "white" }}/>
        <LinkedInIcon style={{ color: "white" }}/>
        
        </div>
      </div>
      
    </div>
    ): !isMobile ? (
      <div style={{ backgroundColor: "#111821",height:50,alignItems:'center',display:'flex',justifyContent:'space-evenly',
    fontFamily:'Jost' }}>
      <div style={{ display: "flex", flexDirection: "row",gap:20 }}>
        <div style={{display:'flex',flexDirection:'row',gap:2}}>
          <EmailOutlinedIcon style={{ color: "grey" }} />
          <div style={{ color: "white",}} >Email: sample@example.com</div>
        </div>
        <div style={{display:'flex',flexDirection:'row',gap:2}}>
          <LocationOnOutlinedIcon style={{ color: "grey" }} />
          <div style={{ color: "white" }}>Road no.3 Juran Chapra, Muz</div>
        </div>
        <div style={{display:'flex',flexDirection:'row',gap:2}}>
        <LocalPhoneIcon style={{ color: "grey" }}/>
          <div style={{ color: "white"}}>Call: +91-0123456789</div>
        </div>
        
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:15}} >
        <div style={{display:'flex',gap:2,justifyContent:'center',}}>
          <AccessTimeIcon style={{ color: "grey" }} />
          <div style={{color:'#fff',fontSize:16,fontWeight:500}}>Mon-Fri 08:00AM-05:00PM</div>
        </div>
        <div style={{display:'flex',gap:20,justifyContent:'center',alignItems:'center'}}>
        <FacebookOutlinedIcon style={{ color: "white" }}/>
        <TwitterIcon style={{ color: "white" }}/>
        <LinkedInIcon style={{ color: "white" }}/>
        
        </div>
      </div>
      
    </div>
    ):
    (
<div style={{ backgroundColor: "#111821",height:'fit-content',alignItems:'center',display:'flex',justifyContent:'space-evenly',padding:'10px 0px',
    fontFamily:'Jost' }}>
      
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:15}} >
        <div style={{display:'flex',gap:2,justifyContent:'center',}}>
          <AccessTimeIcon style={{ color: "grey" }} />
          <div style={{color:'#fff',fontSize:16,fontWeight:500}}>Mon-Fri 08:00AM-05:00PM</div>
        </div>
        <div style={{display:'flex',gap:20,justifyContent:'center',alignItems:'center'}}>
        <FacebookOutlinedIcon style={{ color: "white" }}/>
        <TwitterIcon style={{ color: "white" }}/>
        <LinkedInIcon style={{ color: "white" }}/>
        
        </div>
      </div>
      
    </div>
    )
  );
}

export default DetailBar;
