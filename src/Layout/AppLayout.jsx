import { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";

import CDrawer from "../components/Drawer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
const drawerWidth = 260;

export default function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Navbar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <CDrawer
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <Box
        component="main"
        sx={{
          p: 2,
          flexGrow: 1,
          minHeight: "100vh",
          width: "50vh",
          // backgroundColor: "#",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
