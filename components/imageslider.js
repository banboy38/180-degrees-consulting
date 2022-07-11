import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  return (
    <Carousel showThumbs={false} height="100%" width="800px" infiniteLoop>
      {slides?.map((slide) => {
        return <Image key="slide" src={slide.image}  alt="images"/>;
        })}
    </Carousel>
  );
  };

export default ImageSlider;
