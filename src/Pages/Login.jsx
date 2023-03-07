import { useState } from "react";
import { useNavigate } from "react-router-dom";
import meal2 from "../assets/meal2.svg";
import styled from "styled-components";
import bg from "../assets/bg.jpg";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== password) {
      return;
    }

    onLogin(username);
    navigate("/");
  };

  return (
    <Wrapper>
      <FlexColumn>
        <img src={meal2} alt="" />
        <h1>{"<MSU/>"} RECIPE </h1>
        <p>To login please enter username and password same value</p>
        <StyledForm onSubmit={handleSubmit} action="">
          <div>
            <StyledInput
              type="text"
              placeholder="USERNAME"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <StyledInput
              type="password"
              placeholder="PASSWORD"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <StyledButton type="submit">LOGIN</StyledButton>
          </div>
        </StyledForm>
      </FlexColumn>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const FlexColumn = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #a70c0c;
  border-radius: 50%;
  padding: 3rem;
  gap: 1rem;
  background: rgba(102, 180, 254, 0.45);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 50%;

  & img {
    width: 100px;
  }

  & h1 {
    color: #a70c0c;
  }

  & p {
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  & ::placeholder {
    color: white;
  }
`;

const StyledButton = styled.button`
  width: 190px;
  padding: 0.3rem 0.3rem;
  background-color: rgba(167, 12, 12, 0.4);
  color: white;
  border: none;
`;

const StyledInput = styled.input`
  width: 190px;
  padding: 0.5rem 0.5rem;
  background-color: rgba(167, 12, 12, 0.4);
`;
