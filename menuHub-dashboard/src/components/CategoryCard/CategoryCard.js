import React from "react";
// styles
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const cardStyle = {
  //width: "80%",
  //minHeight: "25vw",
};
function CategoryCard({ title, categoryImage }) {
  return (
    <Card style={cardStyle} sx={({ minHeight: "200px" }, { width: "80%" })}>
      <CardActionArea>
        {/* {categoryImage && (
          <CardMedia
            component="img"
            image={`${process.env.SERVICE_ORIGIN} ${categoryImage.slice(6)}`}
            alt="green iguana"
          />
        )} */}
        <CardContent>
          <Typography gutterBottom variant="h4" align="center" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CategoryCard;
