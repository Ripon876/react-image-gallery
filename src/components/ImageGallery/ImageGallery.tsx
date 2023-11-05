import Gallery from "../Gallery";
import Header from "../Header";
import { Wrapper, Container } from "./ImageGallery.styles";

const ImageGallery = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Gallery />
      </Container>
    </Wrapper>
  );
};

export default ImageGallery;
