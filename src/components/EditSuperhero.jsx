import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditSuperhero = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    superpower: "",
    affiliation: "",
    origin: "",
    power_level: "",
    city: ""
  });

  useEffect(() => {
    const fetchHero = async () => {
      const { data, error } = await supabase
        .from("superheroes")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.error("Fetch error:", error);
      else setForm(data);
    };

    fetchHero();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("superheroes")
      .update(form)
      .eq("id", id);

    if (error) {
      console.error("Update error:", error);
      toast.error("❌ Failed to update superhero.");
    } else {
      toast.success("✅ Superhero updated!");
      setTimeout(() => navigate("/"), 2000);
    }
  };

  const handleDelete = async () => {
    const { error } = await supabase
      .from("superheroes")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Delete error:", error);
      toast.error("❌ Failed to delete superhero.");
    } else {
      toast.info("🗑️ Superhero deleted.");
      setTimeout(() => navigate("/"), 2000);
    }
  };

  return (
    <>
      <form onSubmit={handleUpdate} className="card">
        <h2>Edit Superhero</h2>
        <input name="name" value={form.name} onChange={handleChange} required />
        <input name="superpower" value={form.superpower} onChange={handleChange} required />
        <select name="affiliation" value={form.affiliation} onChange={handleChange} required>
          <option value="">Select Affiliation</option>
          <option value="Hero">Hero</option>
          <option value="Villain">Villain</option>
          <option value="Anti-Hero">Anti-Hero</option>
        </select>
        <input name="origin" value={form.origin} onChange={handleChange} />
        <input name="power_level" type="number" value={form.power_level} onChange={handleChange} />
        <input name="city" value={form.city} onChange={handleChange} />
        <button type="submit">Update Superhero</button>
        <button type="button" onClick={handleDelete} style={{ backgroundColor: "crimson", marginLeft: "10px" }}>
          Delete Superhero
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default EditSuperhero;
