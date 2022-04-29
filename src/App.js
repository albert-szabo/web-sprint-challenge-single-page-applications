import React, { useState } from 'react';

import { Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home';
import PizzaForm from './components/PizzaForm';

import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  size: '',
  sausage: false,
  onions: false,
  ham: false,
  pineapple: false,
  instructions: ''
}

const initialFormError= {
  name: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormError] = useState(initialFormError);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormError({ ...formError, [name]: '' }))
      .catch(error => setFormError({ ...formError, [name]: error.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <div className='App'>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='pizza' id='order-pizza'>Order Pizza</Link>
      </nav>
      <Switch>
        <Route path='/pizza'>
          <PizzaForm id='pizza-form' values={formValues} error={formError} change={inputChange} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
