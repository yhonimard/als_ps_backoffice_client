import {
  Box,
  Paper,
  Button,
  TextField,
  MenuItem,
  Toolbar,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ProductTable from "../components/product/ProductTable";
// import product from "../config/product";
import ProductModal from "../components/product/ProductModal";
import { useState } from "react";
import { useFormik } from "formik";
import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { GET_PRODUCT_CATEGORY } from "../fixtures/api";

export default function ProductPage() {
  const categoryQuery = useQuery({
    queryKey: [GET_PRODUCT_CATEGORY],
    queryFn: api.request.getProductCategory,
  });

  const [isOpenModal, setIsOpenModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      search: "",
      category: "",
      status: true,
    },
    onSubmit: () => {},
  });


  return (
    <Box>
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setIsOpenModal(true)}
        >
          Add Product
        </Button>
        <ProductModal
          onClose={() => setIsOpenModal(false)}
          open={isOpenModal}
        />
      </Box>

      <Paper sx={{ p: 2, mb: 2, mt: 2 }}>
        <Stack
          display="flex"
          spacing={2}
          direction={`row`}
          sx={{ flexWrap: "wrap" }}
        >
          <TextField
            label="Search Product"
            size="small"
            name="search"
            value={formik.values.search}
            onChange={formik.handleChange}
          />

          <TextField
            select={true}
            label="Category"
            size="small"
            sx={{ minWidth: 120 }}
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
          >
            {categoryQuery?.data?.map((d) => (
              <MenuItem value={d.id}>{d.name}</MenuItem>
            ))}
          </TextField>

          <TextField
            label="Status"
            select
            size="small"
            sx={{ minWidth: 100 }}
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </TextField>
        </Stack>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <ProductTable />
      </Paper>
    </Box>
  );
}
