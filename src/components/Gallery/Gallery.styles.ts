import styled from "styled-components";

export const GalleryContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
`;

export const AddNewImage = styled.div`
  border: 2px dashed #e1e2e4;
  border-radius: 0.3rem;
  position: relative;
  cursor: pointer;

  & > img {
    height: 100%;
    width: 100%;
    visibility: hidden;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;

    & > img {
      width: 25px;
      height: 25px;
      object-fit: contain;
    }
  }

  & input {
    display: none;
  }
`;
