import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <h2>{data.label}</h2>
      <img src={data.image} alt={data.label} />
      <div>
        <button onClick={() => navigate("/details", { state: data })}>
          View More
        </button>
      </div>
    </>
  );
};

export default Card;
