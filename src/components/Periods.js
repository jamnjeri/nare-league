import React, { useEffect, useState } from "react";
import apiEndpoints from "../api";

const Periods = ({ competitionId = 2 }) => {
  const [periods, setPeriods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiEndpoints
      .getPeriods()
      .then((response) => {
        console.log("Periods Response:", response); // Log the response
        setPeriods(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching periods:", error); // Log the error
        setError(error.message);
        setLoading(false);
      });
  }, [competitionId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Periods</h1>
      <ul>
        {periods.map((period) => (
          <li key={period.id}>{period.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Periods;
