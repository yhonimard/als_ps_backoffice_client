import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#00C853",
    },

    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily:
      "Inter, Roboto, sans-serif",
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
