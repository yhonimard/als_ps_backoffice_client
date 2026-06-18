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
import { useFormik } from "formik";
import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { GET_PRODUCT_CATEGORY } from "../fixtures/api";
import useProductStore from "../store/product.store";

export default function ProductPage() {
  const categoryQuery = useQuery({
    queryKey: [GET_PRODUCT_CATEGORY],
    queryFn: api.request.getProductCategory,
  });

  const toggleCreateProductModal = useProductStore(
    (s) => s.toggleCreateProductModal,
  );

  const formik = useFormik({
    initialValues: {
      search: "",
      category: "",
      status: true,
    },
  });

  return (
    <>
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
            onClick={() => toggleCreateProductModal(true)}
          >
            Add Product
          </Button>
          <ProductModal />
        </Box>

        <Paper sx={{ p: 2, mb: 2, mt: 2, maxWidth: "100%" }}>
          <Stack
            display="flex"
            spacing={2}
            useFlexGap
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
                <MenuItem children={true} value={d.id} key={d.id}>
                  {d.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select={true}
              label="Status"
              size="small"
              sx={{ minWidth: 120 }}
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
            >
              <MenuItem value={``}>All</MenuItem>
              <MenuItem value={true}>Active</MenuItem>
              <MenuItem value={false}>Inactive</MenuItem>
            </TextField>
          </Stack>
        </Paper>
      </Box>
      <Box sx={{ maxHeight: 600, width: "100%" }}>
        <ProductTable categoryData={categoryQuery?.data}/>
      </Box>
    </>
  );
}
