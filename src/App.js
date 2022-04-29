import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home';
import PizzaForm from './components/PizzaForm';

const App = () => {
  return (
    <div className='App'>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='pizza' id='order-pizza'>Order Pizza</Link>
      </nav>
      <Switch>
        <Route path='/pizza'>
          <PizzaForm id='pizza-form' />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
