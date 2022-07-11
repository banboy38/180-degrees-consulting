import { Box, Container, Image, Stack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
  return (
    // direction="column" justifyContent="center" height={52} position="fixed" paddingX={52} paddingLeft={36} paddingTop="20em"
    <Container  paddingTop={12} maxWidth="container.lg" borderRadius="md">
      <Carousel showThumbs={false} infiniteLoop>
      {slides?.map((slide) => {
        return <Image key="slide" src={slide.image}  alt="images"/>;
        })}
    </Carousel>
    </Container>

  );};

export default ImageSlider;
