import { Box, Container, Image, Stack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
  return (
    <Container maxWidth="container.lg" height="3xl" zIndex={0}>
      <Carousel showThumbs={false} infiniteLoop autoPlay interval={2750} transitionTime='1500'>
      {slides?.map((slide) => {
        return <Image borderRadius="10px" key="slide" src={slide.image}  alt="images"/>;
        })}
    </Carousel>
    </Container>

  );};

export default ImageSlider;
