import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #edf1f7;

  @media (max-width: 850px) {
    width: 100%;
    padding: 2rem;
    height: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 845px;
  margin: 0 auto;
  background: white;
`;
