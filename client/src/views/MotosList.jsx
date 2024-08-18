import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MotosList = () => {
  const [motos, setMotos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/api/motos")
      .then((response) => setMotos(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>MENU</h1>
      <table>
        <thead>
          <tr>
            <th>MAKE</th>
            <th>MODEL</th>
            <th>YEAR</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {motos.map((moto) => (
            <tr key={moto._id}>
              <td>{moto.make}</td>
              <td>{moto.model}</td>
              <td>{moto.year}</td>
              <td>
                <Link to={`/motos/${moto._id}/details`}>DETAILS|</Link>
                
                <Link to={`/motos/${moto._id}/update`}>|EDIT</Link>
              
      
        
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MotosList;