import { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";

const SuperheroList = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      const { data, error } = await supabase
        .from("superheroes")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setHeroes(data);
    };

    fetchHeroes();
  }, []);

  return (
    <div>
      <h2>Superhero Roster</h2>
      {heroes.length === 0 ? (
        <p>No superheroes yet. Add some!</p>
      ) : (
        heroes.map((hero) => (
          <div key={hero.id} className="card">
            <h3>{hero.name}</h3>
            <p><strong>Power:</strong> {hero.superpower}</p>
            <p><strong>Affiliation:</strong> {hero.affiliation}</p>
            <Link to={`/superhero/${hero.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default SuperheroList;
