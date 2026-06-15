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

export default function ProductModal({
  open,
  onClose,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
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
        <Grid container spacing={2} sx={{ mt: 0.5 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Product Name"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="SKU"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Category"
            >
              <MenuItem value="coffee">
                Coffee
              </MenuItem>

              <MenuItem value="food">
                Food
              </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Product Type"
            >
              <MenuItem value="menu">
                Menu
              </MenuItem>

              <MenuItem value="ingredient">
                Ingredient
              </MenuItem>

              <MenuItem value="supply">
                Supply
              </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              type="number"
              label="Selling Price"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              type="number"
              label="Cost Price"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Unit"
              placeholder="pcs, gram, ml"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              multiline
              rows={3}
              fullWidth
              label="Description"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Active Product"
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
        >
          Save Product
        </Button>
      </DialogActions>
    </Dialog>
  );
}