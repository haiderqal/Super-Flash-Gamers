import { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateSuperhero = () => {
  const [form, setForm] = useState({
    name: "",
    superpower: "",
    affiliation: "",
    origin: "",
    power_level: "",
    city: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("superheroes").insert([form]);
    if (error) {
      console.error("Error creating superhero:", error);
      toast.error("❌ Failed to create superhero.");
    } else {
      toast.success("🎉 Superhero created successfully!");
      setTimeout(() => navigate("/"), 2000); // wait 2s then redirect
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="card">
        <h2>Create a New Superhero</h2>
        <input name="name" onChange={handleChange} placeholder="Name" required />
        <input name="superpower" onChange={handleChange} placeholder="Superpower" required />
        <select name="affiliation" onChange={handleChange} required>
          <option value="">Select Affiliation</option>
          <option value="Hero">Hero</option>
          <option value="Villain">Villain</option>
          <option value="Anti-Hero">Anti-Hero</option>
        </select>
        <input name="origin" onChange={handleChange} placeholder="Origin (Mutant, Alien...)" />
        <input name="power_level" type="number" onChange={handleChange} placeholder="Power Level" />
        <input name="city" onChange={handleChange} placeholder="City" />
        <button type="submit">Add Superhero</button>
      </form>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default CreateSuperhero;
