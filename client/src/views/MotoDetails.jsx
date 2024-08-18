import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const MotoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [moto, setMoto] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9999/api/motos/${id}`)
      .then((response) => setMoto(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleBorrow = () => {
    axios
      .delete(`http://localhost:9999/api/motos/${id}`)
      .then(() => navigate("/menu"))
      .catch((error) => console.log(error));
  };

  return moto ? (
    <div className="moto-details">
      <h1>{moto.make}</h1>
      <p>MODEL : {moto.model}</p>
      <p>YEAR : {moto.year}</p>
      
      
        <button onClick={handleBorrow} style={{backgroundColor: "black"}}>
          REMOVE
        </button>
      
    </div>
  ) : (
    <p>LOADING...</p>
  );
};

export default MotoDetails;