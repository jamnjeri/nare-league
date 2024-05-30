import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompetitions } from "./competitionsSlice";

const HomeLeft = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.competitions);

  useEffect(() => {
    dispatch(fetchCompetitions());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Check if there is data
  if (!data || !data.all_sports) {
    return <div>No sports available</div>;
  }

  const baseUrl = "https://api.betnare.com/v1";

  // Store name and flag
  const sportsWithFlags = data.all_sports.map((sport) => ({
    name: sport.sport_name,
    // flag: `${baseUrl}${sport.flag}`,
    flag: sport.flag,
  }));

  return (
    <div>
      {sportsWithFlags.map((sport, index) => (
        <div key={index}>
          <img src={sport.flag} style={{ width: '20px', height: '20px', marginRight: '5px' }} />
          <span>{sport.name}</span>
        </div>
      ))}
    </div>
  );
};

export default HomeLeft;
