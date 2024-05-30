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

function App() {
  const [activePage, setActivePage] = useState("Home");

  const renderActivePage = () => {
    switch (activePage) {
      case "Home":
        return <HomePage />;
      case "NareLeague":
        return <NareLeaguePage />;
      default:
        return null; // Render nothing for other pages
    }
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header setActivePage={setActivePage} />
        {renderActivePage()}
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
