import {
  Dashboard,
  Inventory2,
  People,
  PointOfSale,
  ReceiptLong,
  Settings,
  ShoppingCart,
} from "@mui/icons-material";
import { Drawer } from "@mui/material";
import {
  Box,
  Avatar,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router";
const menus = [
  { label: "Dashboard", icon: <Dashboard />, link: "/" },
  { label: "Product", icon: <PointOfSale />, link: "product" },
  { label: "Penjualan", icon: <PointOfSale />, link: "penjualan" },
  { label: "Inventory", icon: <Inventory2 />, link: "inventory" },
  { label: "Pembelian", icon: <ShoppingCart />, link: "pembelian" },
  { label: "Laporan", icon: <ReceiptLong />, link: "laporan" },
  { label: "Karyawan", icon: <People />, link: "karyawan" },
  { label: "Pengaturan", icon: <Settings />, link: "settings" },
];

const drawer = (
  <>
    <Box
      sx={{
        p: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar>Y</Avatar>

      <Box>
        <Typography fontWeight={700}>Yhonimard</Typography>

        <Typography variant="caption" color="text.secondary">
          ME? NOBODY
        </Typography>
      </Box>
    </Box>

    <Divider />

    <List sx={{ p: 2 }}>
      {menus.map((item) => (
        <ListItemButton
          key={item.label}
          LinkComponent={Link}
          to={item.link}
          sx={{
            mb: 1,
            borderRadius: 2,
          }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>

          <ListItemText primary={item.label} />
        </ListItemButton>
      ))}
    </List>
  </>
);

const CDrawer = ({ setMobileOpen, mobileOpen, drawerWidth }) => {
  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#111827",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* DESKTOP DRAWER */}
      <Drawer
        variant="permanent"
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#111827",
            borderRight: "1px solid #334155",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default CDrawer;
