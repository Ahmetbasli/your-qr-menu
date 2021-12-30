import React from "react";
// styles
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { width } from "@mui/system";

const cardStyle = {
  // backgroundColor: "#CBC3E3",
  card: {
    height: "400px",
    width: "300px",
  },
  img: {
    objectFit: "cover",
  },
};
function ProductCard({ title, description, price, productImage }) {
  return (
    <Card style={cardStyle.card}>
      <CardActionArea>
        {productImage && (
          <CardMedia
            style={cardStyle.img}
            component="img"
            image={`https://menuhub-backend.herokuapp.com/upload/${productImage}`}
            alt="green iguana"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h4" align="center" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" align="center" component="div">
            {description}
          </Typography>
          <Typography gutterBottom variant="p" align="center" component="div">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
