import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";


const UpdateMoto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    errors: {},
  });

  useEffect(() => {
    axios
      .get(`http://localhost:9999/api/motos/${id}`)
      .then((res) => {
        setFormData({
          make: res.data.make,
          model: res.data.model,
          year: res.data.year,
          errors: {},
        });
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMoto = {
      make: formData.make,
      model: formData.model,
      year: formData.year,
    };
    axios
      .put(`http://localhost:9999/api/motos/${id}`, updatedMoto)
      .then(() => navigate("/menu"))
      .catch((err) =>
        setFormData((prevData) => ({
          ...prevData,
          errors: err.response.data.errors,
        }))
      );
  };

  return (
    <div>
      <h1>EDIT : {formData.make}</h1>
      <form onSubmit={handleSubmit}>
        <label>MAKE</label>
        {formData.errors.make && (
          <p style={{ color: "red" }}>{formData.errors.make.message}</p>
        )}
        <input
          type="text"
          name="make"
          value={formData.make}
          onChange={handleChange}
          required
        />
        <label>MODEL</label>
        {formData.errors.model && (
          <p style={{ color: "red" }}>{formData.errors.model.message}</p>
        )}
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
        />
        <label>YEAR</label>
        {formData.errors.year && (
          <p style={{ color: "red" }}>{formData.errors.year.message}</p>
        )}
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
        />
        
        <button type="submit" style={{backgroundColor: "black"}}>UPDATE</button>
      </form>
      
    </div>
  );
};

export default UpdateMoto;