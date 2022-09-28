import { Box } from "@mui/material";
import teamImage from "../../../images/medicine.svg";
import api from "../../../services/api"
import { useEffect, useState } from "react";

export default function About() {


  const [quotesValue, setQuotesValue] = useState(0);

  const data = {
    leads: 101,
    quotesValue,
    pending: 40,
  };
  useEffect(() => {
    api.get("/quotes").then(({ data }) => {
      return data.length ? setQuotesValue(data.length) : 0
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ padding: "2rem" }}>
      <Box sx={{ display: "flex", flexDirection: ["column", "column", "row"] }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: ["center", "center", "initial"],
            color: "text.white",
          }}
        >
          <Box
            sx={{
              fontSize: ["2rem", "3rem", "3rem"],
              fontWeight: "700",
              maxWidth: "380px",
              textAlign: ["center", "center", "initial"],
              
            }}
          >
            Bem-vindos a Drugstore Delivery
          </Box>
          <Box
            sx={{
              fontSize: "1.1rem",
              textAlign: ["center", "center", "initial"],
              marginTop: "2rem",
              maxWidth: "600px",
              fontWeight: "500",
              maxHeight: "308px",
              overflow: "hidden"
            }}
          >
            Nós somos a Drugstore Delivery, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
            pretium lectus quam id leo in vitae. Lacus sed turpis tincidunt id
            aliquet risus feugiat. Quisque id diam vel quam elementum. Nisl
            purus in mollis nunc sed id semper. Ac ut consequat semper viverra
            nam libero justo. Sed elementum tempus egestas sed sed risus. Lectus
            arcu bibendum at varius vel pharetra vel turpis. Nulla facilisi
            morbi tempus iaculis urna id volutpat lacus. Lacus viverra vitae
            congue eu consequat ac felis donec et. onsectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vel pretium lectus quam id leo in vitae. Lacus sed turpis tincidunt
            id aliquet risus feugiat. Quisque id diam vel quam elementum. Nisl
          </Box>
        </Box>
        <Box
          sx={{
            display: ["none", "none", "flex"],
            flexDirection: "column",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "36rem",
              marginTop: "-2.5rem",
            }}
            component="img"
            alt="team"
            src={teamImage}
          ></Box>
          <Box sx={{ display: "flex", marginTop: "-2rem", gap: "2rem" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  color: "text.orange",
                  fontWeight: "900",
                  fontSize: "5rem",
                  marginRight: "1rem",
                  textShadow: "6px 6px 2px black",
                }}
              >
                {data.leads}
              </Box>
              <Box
                sx={{
                  color: "text.white",
                  fontWeight: "700",
                  display: "flex",
                  flexDirection: "column",
                 
                  fontSize: "1.5rem",
                }}
              >
                <Box>REMÉDIOS</Box>
                <Box>VENDIDOS</Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  color: "text.orange",
                  fontWeight: "900",
                  fontSize: "5rem",
                  marginRight: "1rem",
                  textShadow: "6px 6px 2px black",
                }}
              >
                {data.quotesValue}
              </Box>
              <Box
                sx={{
                  color: "text.white",
                  fontWeight: "700",
                  display: "flex",
                  flexDirection: "column",
                 
                  fontSize: "1.5rem",
                }}
              >
                <Box>REMÉDIOS</Box>
                <Box>DISPONÍVEIS</Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  color: "text.orange",
                  fontWeight: "900",
                  fontSize: "5rem",
                  marginRight: "1rem",
                  textShadow: "6px 6px 2px black",
                }}
              >
                {data.pending}
              </Box>
              <Box
                sx={{
                  color: "text.white",
                  fontWeight: "700",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "1.5rem",
                }}
              >
                <Box>REMÉDIOS</Box>
                <Box>PENDENTES</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
