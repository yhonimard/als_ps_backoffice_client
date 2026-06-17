import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
  MenuItem,
  FormControlLabel,
  Switch,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { useQuery } from "@tanstack/react-query";
import { GET_PRODUCT_CATEGORY } from "../../fixtures/api";
import api from "../../api";

export default function ProductModal({ open, onClose }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      sku: "",
      price: 0,
      isActive: true,
      categoryName: "",
      variantName: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });

  const categoryQuery = useQuery({
    queryKey: [GET_PRODUCT_CATEGORY],
    queryFn: api.request.getProductCategory,
  });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Add Product
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={2} sx={{ mt: 0.5 }} component={"form"}>
          <Grid xs={6}>
            <TextField
              fullWidth
              label="Product Name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="SKU"
              name="sku"
              value={formik.values.sku}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Category"
              sx={{ minWidth: 150 }}
              onChange={formik.handleChange}
              name="categoryName"
              value={formik.values.categoryName}
            >
              {categoryQuery.data?.map((data) => (
                <MenuItem value={data.id}>{data.name}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              type="number"
              label="Selling Price"
              name="price"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="variant"
              name="variantName"
              onChange={formik.handleChange}
              value={formik.values.variantName}
            />
          </Grid>

          <Grid item xs={6}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Active Product"
              name="isActive"
              value={formik.values.isActive}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button variant="contained" onClick={formik.handleSubmit}>
          Save Product
        </Button>
      </DialogActions>
    </Dialog>
  );
}
