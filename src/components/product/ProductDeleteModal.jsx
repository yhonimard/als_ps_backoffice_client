import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import useProductStore from "../../store/product.store";

const ProductDeleteModal = () => {
  const { isOpenDeleteModal, toggleDeleteProductModal, deletedProductId } =
    useProductStore((s) => s);

  const onClose = () => {
    toggleDeleteProductModal(false);
  };

  const onDelete = () => {

  };



  return (
    <Dialog open={isOpenDeleteModal} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Delete Confirmation</DialogTitle>

      <DialogContent>
        <Typography color="text.secondary">
          Are you sure you want to delete this item?
        </Typography>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>

        <Button variant="contained" color="error" onClick={onDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDeleteModal;
