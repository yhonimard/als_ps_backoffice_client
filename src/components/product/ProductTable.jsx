import { Chip, IconButton, Stack } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import api from "../../api";
import { useQuery } from "@tanstack/react-query";
import { GET_PRODUCT } from "../../fixtures/api";

const columns = [
  {
    field: "name",
    headerName: "Name",
    flex: 1.5,
  },
  {
    field: "variant",
    headerName: "Variant",
    flex: 1,
    renderCell: (params) => params.value || "-",
  },

  {
    field: "sku",
    headerName: "SKU",
    flex: 1,
  },

  {
    field: "price",
    headerName: "Price",
    flex: 1,
    renderCell: (params) =>
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(params.value),
  },

  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => (
      <Chip
        size="small"
        label={params.value === true ? "Active" : "Inactive"}
        color={params.value === true ? "success" : "default"}
      />
    ),
  },
  {
    field: "createdBy",
    headerName: "Created By",
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 120,
    sortable: false,
    renderCell: () => (
      <Stack direction="row">
        <IconButton size="small">
          <Edit fontSize="small" />
        </IconButton>

        <IconButton size="small">
          <Delete fontSize="small" />
        </IconButton>
      </Stack>
    ),
  },
];

const ProductTable = () => {
  const productsData = useQuery({
    queryKey: [GET_PRODUCT],
    queryFn: api.request.getProduct,
  });

  return (
    <DataGrid
      rows={productsData.data}
      columns={columns}
      disableRowSelectionOnClick
      pageSizeOptions={[10, 25, 50]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
            page: 0,
          },
        },
      }}
      sx={{
        border: 0,

        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#1E293B",
        },

        "& .MuiDataGrid-cell": {
          borderColor: "#334155",
        },
      }}
    />
  );
};

export default ProductTable;
