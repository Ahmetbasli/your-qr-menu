import React from "react";
// styles
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
console.log(process.env.SERVICE_ORIGIN);

const cardStyle = {
  // backgroundColor: "#CBC3E3",
  card: {
    height: "300px",
    width: "300px",
  },
  img: {
    marginBottom: "13px",
    height: "200px",
    objectFit: "cover",
  },
};
function CategoryCard({ title, categoryImage }) {
  console.log(categoryImage);
  return (
    <Card style={cardStyle.card}>
      <CardActionArea>
        {categoryImage && (
          <CardMedia
            style={cardStyle.img}
            component="img"
            image={`https://menuhub-backend.herokuapp.com/upload/${categoryImage}`}
            alt="green iguana"
          />
        )}
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
