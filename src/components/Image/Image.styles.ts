import styled from "styled-components";

export const Overlay = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ImageContainer = styled.div<{ isSelected: boolean }>`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 0.3rem;
  position: relative;
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  transform: translate3d(var(--translate-x, 0), var(--translate-y, 0), 0)
    scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1));
  transform-origin: 0 0;
  touch-action: manipulation;
  background: white;
  cursor: pointer;

  & input {
    display: none;
  }

  ${Overlay} {
    background: ${(props) => (props.isSelected ? "#f9fafb66" : "#00000080")};
    display: ${(props) => (props.isSelected ? "block" : "none")};
  }

  &:hover {
    & input {
      display: block;
    }

    & ${Overlay} {
      display: block;
    }
  }
`;

export const FeaturedImageContainer = styled(ImageContainer)`
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  position: absolute;
  top: 1rem;
  left: 1rem;
  height: 15px;
  width: 15px;
  z-index: 10;
  cursor: pointer;
`;
