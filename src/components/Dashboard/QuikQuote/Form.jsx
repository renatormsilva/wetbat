import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import api from "../../../services/api";

const formStyle = {
  "& > :not(style)": { m: 1.7, width: ["64%", "34%"] }
  
  }

const currencies = [
  {
    value: "Uber",
    label: "Uber",
  },
  {
    value: "Taxi",
    label: "Taxi",
  },
  {
    value: "Rental Car",
    label: "Rental Car",
  },
  {
    value: "Public Transportation",
    label: "Public Transportation",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const PersonalTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 12,
    fontWeight: 700,
    backgroundColor: theme.palette.primary.dark,
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },

    "&.Mui-focused": {
      backgroundColor: "theme.palette.primary.dark",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.dark,
    },
    ".MuiFormLabel-root": {
      color: "red",
    },
  },
  "& .MuiInputLabel-root": { fontWeight: 600, color: "#b4b4b4" },
}));

export default function Form() {
  const [departValue, setDepartValue] = useState(new Date());
  const [returnValue, setReturnValue] = useState(new Date());
  const [currency, setCurrency] = useState("Uber");

  const formRef = React.useRef();

  const [data, setData] = useState({
    from: "",
    destination: "",
    departDate: "",
    returnDate: "",
    people: "",
    transportation: "",
    name: "",
  });


  function resetData() {
    return setData({
      from: "",
      destination: "",
      departDate: "",
      returnDate: "",
      people: "",
      transportation: "",
      name: "",
    })
  }

 
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    newData.departDate = departValue.toLocaleDateString();
    newData.returnDate = returnValue.toLocaleDateString();
    newData.transportation = currency;
    setData(newData);
  }

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  function submit(e) {
    e.preventDefault();
    if (data.people && data.name && data.destination && data.from) {
      api
        .post("/quotes", {
          from: data.from,
          destination: data.destination,
          departDate: data.departDate,
          returnDate: data.returnDate,
          people: parseInt(data.people),
          transportation: data.transportation,
          name: data.name,
        })
        .then((res) => {
          console.log(res.data);
        });
    }
  }

  return (
    <Box
      component="form"
      ref={formRef}
      sx={formStyle}
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        submit(e)
        return resetData()
      }}
    >
      <PersonalTextField
        label="FROM*"
        id="from"
        required
        variant="filled"
        style={{ marginTop: 11 }}
        onChange={(e) => handle(e)}
        value={data.from}
      />
      <PersonalTextField
        required
        label="DESTINATION"
        id="destination"
        variant="filled"
        style={{ marginTop: 11 }}
        onChange={(e) => handle(e)}
        value={data.destination}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          sx={{}}
          label="BIRTH DATE"
          openTo="year"
          variant="filled"
          views={["year", "month", "day"]}
          value={departValue}
          id="departDate"
          onChange={(e) => {
            setDepartValue(e);
          }}
          renderInput={(params) => (
            <PersonalTextField
              sx={{
                backgroundColor: "primary.dark",
                borderRadius: 2,
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              id="departDate"
              {...params}
            />
          )}
        />

        
      </LocalizationProvider>

      <PersonalTextField
        required
        label="PEOPLE"
        type="number"
        id="people"
        variant="filled"
        style={{ marginTop: 11 }}
        onChange={(e) => handle(e)}
        value={data.people}
      />

      <PersonalTextField
        focused
        label="TRANSPORTATION"
        select
        id="transportation "
        variant="filled"
        style={{ marginTop: 11 }}
        value={currency}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
      >
        {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </PersonalTextField>

      <Box
        component={PersonalTextField}
        required
        label="NAME"
        id="name"
        variant="filled"
        
        sx={{marginTop: 11, width: ["74%", "72%"] }}
        onChange={(e) => handle(e)}
        value={data.name}
      />

      <Button
        onClick={() => formRef.current.reportValidity()}
        type="submit"
        variant="contained"
        color="success"
        sx={{ fontWeight: "700", borderRadius: "16px", padding: "0.8rem", width: ["74%", "72%"], whiteSpace: "nowrap"}}
      >
        Create a quote
      </Button>
    </Box>
  );
}
