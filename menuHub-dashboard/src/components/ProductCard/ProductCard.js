import React from "react";
// styles
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const cardStyle = {
  // backgroundColor: "#CBC3E3",
};
function ProductCard({ title, description, price, productImage }) {
  return (
    <Card style={cardStyle} sx={({ minHeight: "200px" }, { width: "80%" })}>
      <CardActionArea>
        {/* {productImage && (
          <CardMedia
            component="img"
            image={`${process.env.SERVICE_ORIGIN} ${productImage.slice(6)}`}
            alt="green iguana"
          />
        )} */}
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
