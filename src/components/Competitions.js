import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompetitions } from "./competitionsSlice";

const Comp = () => {
  const dispatch = useDispatch();
  const competitions = useSelector((state) => state.competitions);

  useEffect(() => {
    dispatch(fetchCompetitions());
  }, [dispatch]);

  return (
    <div>
        Hi
  </div>
  );
};

export default Comp;
