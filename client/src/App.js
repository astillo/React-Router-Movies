import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MoviesList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {

  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        <Route exact path='/' component={MoviesList} />
        <Route path={'/movies/:id'} component={Movie} />
      </div>
    </Router>
  );
};

export default App;
