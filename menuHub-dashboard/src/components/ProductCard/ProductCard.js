import React, { useEffect } from "react";
// styles
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CardActions from "@mui/material/CardActions";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addMultipleToCategories } from "../../slices/categorySlice";
import { selectCategories } from "../../slices/categorySlice";
import { useSelector } from "react-redux";
import ShareableDeleteIconforCards from "../Common/ShareableDeleteIconforCards/ShareableDeleteIconforCards";
const cardStyle = {
  // backgroundColor: "#CBC3E3",
  card: {
    //height: "330px",
    width: "300px",
  },
  img: {
    height: "200px",
    objectFit: "cover",
  },
  options: {
    justifyContent: "center",
  },
};
function ProductCard({
  title,
  description,
  price,
  productImage,
  id,
  categoryIdOfProductFeed,
}) {
  const stopCardClickEventOnCardActionsArea = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

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
            {description ? description : ""}
          </Typography>
          <Typography gutterBottom variant="p" align="center" component="div">
            {price ? price : ""}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={cardStyle.options}
        onMouseDown={(event) => event.stopPropagation()}
        onClick={(event) => stopCardClickEventOnCardActionsArea(event)}
        style={cardStyle.options}
      >
        <ShareableDeleteIconforCards id={id} />
      </CardActions>
    </Card>
  );
}

export default ProductCard;
