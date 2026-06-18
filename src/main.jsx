import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#1B5E20",
    },

    background: {
      default: "#121212",
      paper: "#242424",
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export const queryClient = new QueryClient({});

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <SnackbarProvider
      autoHideDuration={1500}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </SnackbarProvider>
  </QueryClientProvider>,
);
