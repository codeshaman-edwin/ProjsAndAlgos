import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddMoto = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    errors: {},
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMoto = {
      make: formData.make,
      model: formData.model,
      year: formData.year
    };
    axios
      .post("http://localhost:9999/api/motos", newMoto)
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
      <h1>ADD MOTO</h1>
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
        <button type="submit" style={{backgroundColor: "black"}}>ADD MOTO</button>
      </form>
    </div>
  );
};

export default AddMoto;