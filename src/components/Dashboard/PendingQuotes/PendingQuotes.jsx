import CardHeader from "../CardHeader";
import { Box } from "@mui/material";
import MyContext from "../../../context/MyContext";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import { Table,  Tbody, Tr,  Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import HeadTableQuotes from "./HeadTableQuotes";

export default function PendingQuotes(props) {
  const [headValues, setHeadValues] = useState([
    "ID#",
    "NAME",
    "FROM",
    "DESTINATION",
  ]);
  const [quotes, setQuotes] = useState([]);

  const [refresh, setRefresh] = useState(true);

  const cardName = "Pending Quotes";
  const fullHeadValues = props.pageHeadValues;


  useEffect(() => {
    api.get("/quotes").then(({ data }) => {
      setQuotes(data.reverse());
    });
    if (fullHeadValues) {
      setHeadValues(fullHeadValues);
    }
    setRefresh(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  const smSizeTable = headValues.length <= 4 ? true : false;

  return (
    <Box>
      <MyContext.Provider value={{ quotes, refresh, setRefresh }}>
        <CardHeader fullHeadValues={fullHeadValues} cardName={cardName} />
        <Box
          sx={{ textAlign: smSizeTable ? "center" : "justify", fontSize: ["0.86rem", "1rem"] }}
          component={Table}
        >
          <HeadTableQuotes fullHeadValues={fullHeadValues}/>

          <Box
            sx={{
              color: "secondary.dark",
              fontWeight: "600",
              "tr:nth-child(n+2)": fullHeadValues
                ? { display: "tableColumn" }
                : { display: "none" },
            }}
            component={Tbody}
          >
            {quotes.map((quote, index) => {
              if (smSizeTable) {
                
                return (
                  <Tr key={index}>
                    <Td key={index}>{quote.id}</Td>
                    <Td key={index}>{quote.name}</Td>
                    <Td key={index}>{quote.from}</Td>
                    <Td key={index}>{quote.destination}</Td>
                  </Tr>
                );
              }
              return (
                <Tr key={index}>
                  <Td key={index}>{quote.id}</Td>
                  <Td key={index}>{quote.name}</Td>
                  <Td key={index}>{quote.from}</Td>
                  <Td key={index}>{quote.destination}</Td>
                  <Td key={index}>{quote.departDate}</Td>
                  <Td key={index}>{quote.returnDate}</Td>
                  <Td key={index}>{quote.people}</Td>
                  <Td key={index}>{quote.transportation}</Td>
                </Tr>
              );
            })}
            <Tr></Tr>
          </Box>
        </Box>
      </MyContext.Provider>
    </Box>
  );
}
