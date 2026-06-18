import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const Navbar = ({ drawerWidth, setMobileOpen, mobileOpen }) => {
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: {
            md: `calc(100% - ${drawerWidth}px)`,
          },
          ml: {
            md: `${drawerWidth}px`,
          },
          backgroundColor: "#242424",
          borderBottom: "1px solid #3A3A3A",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{
              mr: 2,
              display: { md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          <Avatar />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
