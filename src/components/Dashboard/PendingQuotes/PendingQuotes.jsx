import CardHeader from "../CardHeader";
import { Box, Button, Divider } from "@mui/material";
import MyContext from "../../../context/MyContext";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import { Table, Tbody, Tr, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import HeadTableQuotes from "./HeadTableQuotes";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";


export default function PendingQuotes(props) {
  const [headValues, setHeadValues] = useState([
    "ID#",
    "NAME",
    "FROM",
    "DESTINATION",
  ]);
  const [quotes, setQuotes] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [quoteId, setQuoteId] = useState([]);
  const [open, setOpen] = useState(false);

  const cardName = "Pending Quotes";
  const fullHeadValues = props.pageHeadValues;
  const smSizeTable = headValues.length <= 4 ? true : false;

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

  function handleOpen(quoteIdHandler) {
    setQuoteId(quoteIdHandler);

    setOpen(true);
  }

  function quoteDelete() {
    api.delete(`/quotes/${quoteId}`).then(response => {
      console.log(response)
    })
    setOpen(false)
  }
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <MyContext.Provider value={{ quotes, refresh, setRefresh }}>
        <CardHeader
          cardLink="/quotes"
          fullHeadValues={fullHeadValues}
          cardName={cardName}
        />
        <Box
          sx={{
            textAlign: smSizeTable ? "center" : "center",
            fontSize: ["0.86rem", "1rem"],
          }}
          component={Table}
        >
          <HeadTableQuotes fullHeadValues={fullHeadValues} />

          <Box
            sx={{
              color: "secondary.dark",
              fontWeight: "600",
              "tr:nth-child(n+13)": fullHeadValues
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
                  <Td>
                    <DeleteIcon
                      onClick={() => handleOpen(quote.id)}
                      sx={{ color: "red" }}
                    />
                  </Td>
                </Tr>
              );
            })}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Box sx={{fontWeight: "900", fontSize: "2rem", color: "primary.warning", marginBottom: "0.5rem"}}>Are you sure ?</Box>
                <Box>Are you sure you want to delete?</Box>
                <Divider sx={{height: "8px"}}/>
                <Box sx={{display: "flex", justifyContent: "space-evenly", marginTop: "8px"}}>
                  <Button onClick={quoteDelete} sx={{backgroundColor: "primary.success", color: "white"}}>delete</Button>
                  <Button onClick={handleClose} sx={{backgroundColor: "primary.warning", color: "white"}}>cancel</Button>
                </Box>
              </Box>
            </Modal>
          </Box>
        </Box>
      </MyContext.Provider>
    </Box>
  );
}
