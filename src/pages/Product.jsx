import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  MenuItem,
  Toolbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ProductDrawer from "../components/product/ProductDrawer";
import { useState } from "react";

export default function ProductPage() {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  return (
    <Box>
      <Toolbar />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5" fontWeight={700}>
          Products
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenDrawer(true)}
        >
          Add Product
        </Button>
        <ProductDrawer
          onClose={() => setOpenDrawer(false)}
          open={isOpenDrawer}
        />
      </Box>

      <Paper sx={{ p: 2, mb: 2 }}>
        <Box display="flex" gap={2} flexWrap="wrap">
          <TextField label="Search Product" size="small" />

          <TextField
            select
            label="Category"
            size="small"
            sx={{ minWidth: 180 }}
          >
            <MenuItem value="">All Categories</MenuItem>
          </TextField>

          <TextField select label="Status" size="small" sx={{ minWidth: 150 }}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </TextField>
        </Box>
      </Paper>

      <Paper sx={{ p: 2 }}>Product DataTable Here</Paper>
    </Box>
  );
}
