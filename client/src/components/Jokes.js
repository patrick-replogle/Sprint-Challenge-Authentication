import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Jokes = props => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/jokes")
      .then(res => {
        setJokes(res.data);
      })
      .catch(err => {
        console.log("error fetching jokes: ", err);
      });
  }, []);
  return (
    <div>
      <h1>Why So Serious?</h1>
      {jokes.map(joke => {
        return <p key={joke.id}>{joke.joke}</p>;
      })}
    </div>
  );
};

export default Jokes;
