import { CardMedia } from "@mui/material";
import { IMAGES } from "../../constant";

function SvgComponent(props) {
  return (
    <CardMedia
      component="img"
      height="40"
      width={40}
      src={IMAGES.logo}
    />
  );
}

export default SvgComponent;
