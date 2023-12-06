import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const HouseCard = ({ id, title, image, content }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea
        onClick={() => navigate(`/house/${id}`)}
        sx={{ flexGrow: 1 }}
      >
        <CardMedia component="img" image={image} height="200" />
        <CardContent sx={{ height: 200, display: "grid", gap: 2 }}>
          <Typography variant="h5">{title.substring(0, 25)}...</Typography>
          <Typography component="p" variant="body2">
            {content.substring(0, 100)}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HouseCard;
