import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { theme } from "../src/theme";
import Navbar from "./components/Header/Navbar/Navbar";
import Dashboard from "./pages/Home";

import Quotes from "./pages/Quotes";

import Error from "./pages/Error";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/Quotes" element={<Quotes />} />
        <Route path="/Leads" element={<Error />} />
        <Route path="/Tours" element={<Error />} />
        <Route path="/Invoices" element={<Error />} />
        <Route path="/Analytics" element={<Error />} />
        <Route path="/Team" element={<Error />} />
        <Route path="/Admin" element={<Error />} />
        <Route path="/Support" element={<Error />} />
        <Route path="/maintence" element={<Error />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
