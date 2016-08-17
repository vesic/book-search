import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './components/Home';
import NewBook from './components/NewBook';
import BookDetails from './components/BookDetails';
import PostComment from './components/PostComment';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path='books/:id' component={BookDetails} />
    <Route path='comment' component={PostComment} />
    <Route path='new' component={NewBook} />
  </Route>
)
