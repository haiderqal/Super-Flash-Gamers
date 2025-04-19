import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";

const SuperheroDetail = () => {
  const { id } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      const { data, error } = await supabase
        .from("superheroes")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.error(error);
      else setHero(data);
    };

    fetchHero();
  }, [id]);

  if (!hero) return <p>Loading...</p>;

  return (
    <div className="card">
      <h2>{hero.name}</h2>
      <p><strong>Superpower:</strong> {hero.superpower}</p>
      <p><strong>Affiliation:</strong> {hero.affiliation}</p>
      <p><strong>Origin:</strong> {hero.origin}</p>
      <p><strong>Power Level:</strong> {hero.power_level}</p>
      <p><strong>City:</strong> {hero.city}</p>
      <Link to={`/superhero/${hero.id}/edit`}>Edit Superhero</Link>
    </div>
  );
};

export default SuperheroDetail;
