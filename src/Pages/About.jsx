import coding from "../assets/coding.svg";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const About = () => {
  return (
    <div>
      <Navbar />
      <Flex>
        <WrapperSmall>
          <img width="400px" src={coding} alt="" />
          <h3>
            About Software Developer <span>{"<MSU/>"}</span>
          </h3>
        </WrapperSmall>
        <WrapperText>
          <h5>I`m Said</h5>
          <p>I'm currently learning Full-Stack Development Languages.</p>
          <p>
            I've already known HTML, CSS, JS, ReactJS, TypeScript, Python,
            Django.
          </p>
          <p>
            <span>Send email:</span> msaiduslu@gmail.com
          </p>
        </WrapperText>
      </Flex>
    </div>
  );
};

export default About;

const Flex = styled.div`
  background-color: #47000094;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const WrapperSmall = styled.div`
  text-align: center;

  & h3 {
    margin-top: 4rem;
    & span {
      font-size: 1.5rem;
      color: red;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 250px;
    }
  }
`;

const WrapperText = styled.div`
  text-align: right;
  line-height: 2;
  border: 1px solid #a70c0c;
  padding: 1rem;

  & h5 {
    font-size: 1.1rem;
  }

  & span {
    color: red;
  }
`;
