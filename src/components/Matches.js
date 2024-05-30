import React, { useEffect, useState } from "react";
import apiEndpoints from "../api";

const Matches = ({ periodId }) => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiEndpoints
      .getMatches()
      .then((response) => {
        console.log("Matches Response:", response); // response
        setMatches(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching matches:", error); // error
        setError(error.message);
        setLoading(false);
      });
  }, [periodId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Matches</h1>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>{match.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Matches;
