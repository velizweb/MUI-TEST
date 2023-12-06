import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";

const HouseDetail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  const Img = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "centar",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setInfo(data);
      });
  }, [id]);

  return (
    <>
      <Button key="2" sx={{}} component={NavLink} to="/">
        {"<< Back"}
      </Button>
      <Paper
        sx={{
          display: "grid",
          alignItems: "center",
          gap: 2,
          overflow: "hidden",
        }}
      >
        <Img src={info?.image} />

        <Box sx={{ flexGrow: 1, display: "grid", gap: 2, p: 4 }}>
          <Typography variant="h4">{info?.title}</Typography>
          <Box
            sx={{
              mr: 2,
            }}
            component="p"
          >
            Price: 1.500$
          </Box>
          <Grid container spacing={2} sx={{ p: 4 }}>
            <Grid xs={12} sm={6} md={3}>
              <Typography variant="h7">Terreno</Typography>
              <Typography variant="body2">
                210,0 m<sup>2</sup>
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Typography variant="h7">Construcción</Typography>
              <Typography variant="body2">
                140,0 m<sup>2</sup>
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Typography variant="h7">Habitaciones</Typography>
              <Typography variant="body2">6</Typography>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Typography variant="h7">Baños</Typography>
              <Typography variant="body2">3</Typography>
            </Grid>
          </Grid>

          <Typography variant="body1">{info?.content}</Typography>

          <Grid container spacing={2} sx={{ p: 4 }}>
            <Grid xs={12} sm={6} md={3}>
              <Typography variant="h7">Tipo</Typography>
              <Typography variant="body2">Casa</Typography>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Typography variant="h7">Año Construcción</Typography>
              <Typography variant="body2">1998</Typography>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Typography variant="h7">Tipo Terreno</Typography>
              <Typography variant="body2">Regular</Typography>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Typography variant="h7">Estado</Typography>
              <Typography variant="body2">Conservado</Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default HouseDetail;
