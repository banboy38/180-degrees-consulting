import { Box, Container, Image, Stack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
  return (
    <Container  paddingTop={12} maxWidth="container.lg" height="3xl" zIndex={0} borderRadius="md">
      <Carousel showThumbs={false} infiniteLoop autoPlay interval={5000} transitionTime='1500'>
      {slides?.map((slide) => {
        return <Image key="slide" src={slide.image}  alt="images"/>;
        })}
    </Carousel>
    </Container>

  );};

export default ImageSlider;
