import React from "react";
import Fade from "react-reveal/Fade";
import Box from "@mui/material/Box";

const Medium = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Fade bottom duration={1500}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "600px", 
            display: "flex",
            justifyContent: "center",
            fontSize: "30px",
            fontWeight: "900",
            flexDirection: "row",
            textAlign: "center", // Center text horizontally
          }}
        >
        </Box>
      </Fade>
    </div>
  );
};

export default Medium;
