import React, { useEffect, useState } from "react";
import apiEndpoints from "../api";

const Playouts = () => {
  const [playouts, setPlayouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiEndpoints
      .getPlayouts()
      .then((response) => {
        console.log("Playouts Response:", response.data);
        setPlayouts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching playouts:", error);
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
      <h1>Playouts</h1>
      <ul>
        {playouts.map((playout) => (
          <li key={playout.id}>{playout.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playouts;
