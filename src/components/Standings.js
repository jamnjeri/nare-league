import React, { useEffect, useState } from "react";
import apiEndpoints from "../api";

const Standings = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiEndpoints
      .getStandings()
      .then((response) => {
        console.log("Standings Response:", response); 
        setStandings(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching standings:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Standings</h1>
      <ul>
        {standings.map((standing) => (
          <li key={standing.id}>{standing.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Standings;
