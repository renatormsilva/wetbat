import { Box } from "@mui/material";

export default function Leads(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Box
          component="img"
          src={props.photo}
          sx={{
            objectFit: "cover",
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            border: "2px solid #717171",
            "boxShadow":"  rgba(0, 0, 0, 0.35) 0px 12px 15px"

          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "initial",
            marginLeft: "1.2rem",
          }}
        >
          <Box sx={{ color: "text.primary", fontWeight: "600" }}>
            {props.name}
          </Box>
          <Box sx={{ color: "text.secondary", fontWeight: "500" }}>
            {props.description}
          </Box>
        </Box>
      </Box>
      <Box sx={{ color: "text.primary", fontWeight: "600" }}>13:40 PM</Box>
    </Box>
  );
}
