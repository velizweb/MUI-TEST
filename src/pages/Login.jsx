import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useAuthContext from "../context/AuthContext";

const Login = () => {
  const { login, errors } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const [errorp, setErrorp] = useState({
    error: false,
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setErrorp({
        error: true,
        message: "Password menor a 8 caracteres",
      });
    }

    if (!validateEmail(email)) {
      setError({
        error: true,
        message: "Email no valido",
      });
    } else {
      setError({
        error: false,
        message: "",
      });

      setErrorp({
        error: false,
        message: "",
      });

      login({ email, password });
    }
  };

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+~]+@[A-Z0-9.~]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  return (
    <Container
      sx={{
        width: { xs: "100%", sm: "30%" },
        margin: "0 auto",
        mt: 15,
      }}
    >
      <Typography variant="h5" color="initial" align="center">
        Ingresar al sistema
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 2, display: "grid", gap: 1 }}
      >
        <TextField
          id="mail"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          helperText={error.message}
          error={error.error}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          helperText={errorp.message}
          error={errorp.error}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" variant="outlined">
          Login
        </Button>

        {errors.message && <Alert severity="error"> {errors.message} </Alert>}
      </Box>
    </Container>
  );
};

export default Login;
