import { Box, Button, Container, TextField, Typography } from "@mui/material";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    data = Object.fromEntries(data);
    data.posted = new Date().toISOString();
    fetch("http://localhost:3000/products", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  return (
    <Container
      sx={{
        width: { xs: "100%", sm: "50%" },
        margin: "0 auto",
        mt: 15,
      }}
    >
      <Typography variant="h5" color="initial" align="left">
        Register Real State
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 2, display: "grid", gap: 1 }}
      >
        <TextField
          id="url"
          label="Url image"
          type="text"
          variant="outlined"
          fullWidth
          name="image"
        />
        <TextField
          id="title"
          label="Publication Title"
          type="text"
          variant="outlined"
          fullWidth
          name="title"
        />
        <TextField
          id="description"
          name="content"
          label="Description"
          type="text"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="land"
          name="land"
          label="Land"
          type="numeric"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="construction"
          name="construction"
          label="Construction"
          type="numeric"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="bedrooms"
          name="bedrooms"
          label="Bedrooms"
          type="numeric"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="bathrooms"
          name="bathrooms"
          label="Bathrooms"
          type="numeric"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="type"
          name="type"
          label="Type (Home, Apartament, Estate, Mansion)"
          type="text"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="year"
          name="year"
          label="Year construction"
          type="numeric"
          variant="outlined"
          fullWidth
        />

        <TextField
          id="terrain"
          name="terrain"
          label="Terrain type (Regular, Strong, Gentle, Mixed)"
          type="text"
          variant="outlined"
          fullWidth
        />

        <TextField
          id="status"
          name="status"
          label="Status (Conserved, Regular, Abandoned)"
          type="text"
          variant="outlined"
          fullWidth
        />

        <Button type="submit" variant="outlined">
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
