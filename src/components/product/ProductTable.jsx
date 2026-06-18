import { Chip } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import api from "../../api";
import { useQuery } from "@tanstack/react-query";
import { GET_PRODUCT } from "../../fixtures/api";
import dayjs from "dayjs";
import { useState } from "react";
import ProductDeleteModal from "./ProductDeleteModal";
import useProductStore from "../../store/product.store";
const ProductTable = ({ categoryData }) => {
  const [pagination, setPagination] = useState({
    page: 0,
    pageSize: 10,
  });

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      editable: true,
    },
    {
      field: "variant",
      headerName: "Variant",
      renderCell: (params) => params.value || "-",
      width: 200,
      editable: true,
    },

    {
      field: "sku",
      headerName: "SKU",
      width: 200,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      width: 200,
      editable: true,
      type: "singleSelect",
      valueOptions: categoryData?.map((d) => ({
        value: d.name,
        label: d.name,
      })),
      // valueFormatter: (val) => {
      //   return categoryData.find((c) => c.name === val)?.name ?? "-";
      // },
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
      editable: true,
      renderCell: (params) =>
        new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(params.value),
    },

    {
      field: "status",
      headerName: "Status",
      width: 200,
      editable: true,
      renderCell: (params) => (
        <Chip
          size="small"
          label={params.value === true ? "Active" : "Inactive"}
          color={params.value === true ? "primary" : "default"}
        />
      ),
    },
    {
      field: "createdBy",
      headerName: "Created By",
      width: 200,
      editable: true,
    },
    {
      field: "createdDate",
      headerName: "Date Created",
      width: 200,
      editable: true,
      type: "date",
      valueFormatter: (v) => dayjs(v).format("DD MMM YYYY"),
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      sortable: false,
      getActions: ({ id }) => {
        return (
          <GridActionsCellItem
            label="Edit"
            icon={<Delete fontSize="small" />}
            onClick={() => handleDelete(id)}
          />
        );
      },
    },
    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   type: "singleSelect",
    // }
  ];

  const { toggleDeleteProductModal, isOpenDeleteModal, deletedProductId } =
    useProductStore();

  const productsData = useQuery({
    queryKey: [GET_PRODUCT, pagination],
    queryFn: async () => {
      const res = await api.request.getProduct({
        page: pagination.page + 1,
        pageSize: pagination.pageSize,
      });
      return res;
    },
  });

  const handleDelete = (id) => {
    toggleDeleteProductModal({ isOpen: true, id: id });
  };
  console.log(deletedProductId);
  

  const processRowUpdate = (newRow, oldRow) => {
    console.log("newrow", newRow);
    console.log("oldrow", oldRow);
    return newRow;
  };

  const handleSetPagination = (data) => {
    setPagination(data);
  };

  return (
    <>
      <DataGrid
        rows={productsData.data?.products}
        columns={columns}
        loading={productsData?.isLoading}
        paginationMode="server"
        rowCount={productsData.data?.totalData}
        pageSizeOptions={[10, 25, 100]}
        processRowUpdate={processRowUpdate}
        onPaginationModelChange={handleSetPagination}
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } },
        }}
        pagination={true}
        sx={{
          border: 0,
          p: 2,
          width: "100%",
          height: "675px",

          "& .MuiDataGrid-cell": {
            borderColor: "#3A3A3A",
          },
        }}
      />

      <ProductDeleteModal />
    </>
  );
};

export default ProductTable;
