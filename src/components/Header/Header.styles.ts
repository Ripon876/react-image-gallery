import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #e1e2e4;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;

  & input {
    margin-right: 0.5rem;
  }

  & button {
    border: none;
    background: none;
    color: #f3443e;
    font-weight: 500;
    font-size: 0.875rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
