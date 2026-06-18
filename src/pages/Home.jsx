import { Box, Toolbar, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Toolbar />
      {/* KPI SECTION */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 2,
          mb: 3,
        }}
      >
        {["Omset Hari Ini", "Transaksi", "COGS", "Laba Kotor"].map((item) => (
          <Box
            key={item}
            sx={{
              p: 3,
            borderRadius: 3,
              backgroundColor:   "#242424",
              border: "1px solid #3A3A3A",
            }}
          >
            <Typography color="text.secondary">{item}</Typography>

            <Typography variant="h5" fontWeight={700} mt={1}>
              Rp 0
            </Typography>
          </Box>
        ))}
      </Box>

      {/* CHART + TABLE */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "2fr 1fr",
          },
          gap: 2,
        }}
      >
        <Box
          sx={{
            height: 400,
            p: 3,
            borderRadius: 3,
            backgroundColor: "#242424",
            border : "1px solid #3A3A3A"
          }}
        >
          <Typography variant="h6" mb={2}>
            Grafik Penjualan
          </Typography>
        </Box>

        <Box
          sx={{
            height: 400,
            p: 3,
            borderRadius: 3,
            backgroundColor: "#242424",
            border : "1px solid #3A3A3A"

          }}
        >
          <Typography variant="h6" mb={2}>
            Top Menu
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
