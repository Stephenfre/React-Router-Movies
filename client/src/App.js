import React, { useState } from "react";
import MovieList from "../src/Movies/MovieList.js";
import { Link, Route } from "react-router-dom";
import MovieCard from "../src/Movies/MovieCard";
import Movie from "../src/Movies/Movie";

import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />
    </div>
  );
};

export default App;
