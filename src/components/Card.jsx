import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div>
          <h4>{data.label}</h4>
          <img width="200px" src={data.image} alt={data.label} />
        </div>
        <div>
          <CardButton onClick={() => navigate("/details", { state: data })}>
            View More
          </CardButton>
        </div>
      </Container>
    </>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 330px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(167, 12, 12, 0.4);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border-radius: 10px;
  padding: 0.5rem;
  outline: 1px solid red;
  & h4 {
    height: 70px;
    color: black;
  }
`;

export const CardButton = styled.button`
  background-color: red;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
