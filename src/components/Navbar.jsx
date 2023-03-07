import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <StyledLink to="/">
          <span>{"<MSU/>"}</span> Recipe
        </StyledLink>
      </div>
      <Flex>
        <StyledLink to="/about">ABOUT</StyledLink>
        <StyledLink to="https://github.com/msaiduslu" target="_blank">
          GITHUB
        </StyledLink>
        <StyledLink to="/login">LOGOUT</StyledLink>
      </Flex>
    </Wrapper>
  );
};

export default Navbar;

export const Wrapper = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(102, 180, 254, 0.6);
  font-size: 1.7rem;
  padding: 1rem;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #a70c0c;
  & span {
    color: red;
  }
  &:hover {
    background-color: #a70c0c;
    color: rgba(102, 180, 254, 0.9);
  }
`;
