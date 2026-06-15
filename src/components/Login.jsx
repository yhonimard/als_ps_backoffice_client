import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import api from "../api";
import useLoginMutation from "../features/auth.mutation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (data) => {
      mutate(data);
    },
  });

  const { mutate } = useLoginMutation();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "#0f172a",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            bgcolor: "#1e293b",
            color: "#fff",
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
          }}
        >
          <CardContent sx={{ p: 5 }}>
            <Box textAlign="center" mb={4}>
              <Typography variant="h4" fontWeight={700}>
                Cafe Back Office
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  mt: 1,
                }}
              >
                Sign in to continue
              </Typography>
            </Box>

            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                label="username"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  style: { color: "#94a3b8" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    "& fieldset": {
                      borderColor: "#334155",
                    },
                    "&:hover fieldset": {
                      borderColor: "#475569",
                    },
                  },
                }}
              />

              <TextField
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                margin="normal"
                InputLabelProps={{
                  style: { color: "#94a3b8" },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        sx={{ color: "#94a3b8" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    "& fieldset": {
                      borderColor: "#334155",
                    },
                    "&:hover fieldset": {
                      borderColor: "#475569",
                    },
                  },
                }}
              />

              <Button
                fullWidth
                variant="contained"
                type="submit"
                size="large"
                sx={{
                  mt: 3,
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                LOGIN
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
