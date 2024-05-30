import React, { useEffect, useState } from "react";
import apiEndpoints from "../api";

const Results = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiEndpoints
      .getResults()
      .then((response) => {
        console.log("Results Response:", response);
        setResults(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching results:", error);
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
      <h1>Results</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
