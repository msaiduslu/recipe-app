import Navbar from "../components/Navbar";
import styled from "styled-components";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <ErrorContainer>
        <iframe
          src="https://giphy.com/embed/8L0Pky6C83SzkzU55a"
          width="480"
          height="480"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </ErrorContainer>
    </>
  );
};

export default NotFound;

export const ErrorContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
