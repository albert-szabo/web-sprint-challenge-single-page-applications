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

const initialOrders = [];

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormError] = useState(initialFormError);
  const [orders, setOrders] = useState(initialOrders);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormError({ [name]: '' }))
      .catch(error => setFormError({ [name]: error.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value })
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(response => {
        setOrders([ response.data, ...orders ]);
        setFormValues(initialFormValues);
      })
      .catch(error => console.error(error));
  }

  const formSubmit = () => {
    const newOrder = {
        name: formValues.name.trim(),
        size: formValues.size.trim(),
        sausage: formValues.sausage,
        onions: formValues.onions,
        ham: formValues.ham,
        pineapple: formValues.pineapple,
        instructions: formValues.instructions.trim()
    }
    postNewOrder(newOrder);
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
          <PizzaForm
            id='pizza-form'
            values={formValues}
            error={formError}
            change={inputChange}
            submit={formSubmit}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
