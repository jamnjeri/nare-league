// import './App.css';
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import HomePage from "./pages/HomePage";
import NareLeaguePage from "./pages/NareLeague";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./components/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [activePage, setActivePage] = useState("Home");

  // const renderActivePage = () => {
  //   switch (activePage) {
  //     case "Home":
  //       return <HomePage />;
  //     case "NareLeague":
  //       return <NareLeaguePage />;
  //     default:
  //       return null;
  //   }
  // };
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nare-league" element={<NareLeaguePage />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
