"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { Header } from "./components/Header.tsx";
import { Footer } from "./sections/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem>
      <Header />
      <App />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
