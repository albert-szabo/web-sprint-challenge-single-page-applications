import React from 'react';

export default function PizzaForm(props) {
    const { values, error } = props;

    const onSubmit = event => {

    }

    const onChange = event => {

    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <h2>Build Your Pizza</h2>

            <div className='errors'>
                <div>{error.name}</div>
            </div>

            <label>Name:
                <input
                    id='name-input'
                    name='name'
                    type='text'
                    placeholder='Enter your name here'
                    value={values.name}
                    onChange={onChange}
                />
            </label>

            <label>Size:
                <select
                    id='size-dropdown'
                    name='size'
                    value={values.size}
                    onChange={onChange}
                >
                    <option value=''>- Please choose a size option -</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>

            <label>Sausage
                <input
                    name='sausage'
                    type='checkbox'
                    checked={values.sausage}
                    onChange={onChange}
                />
            </label>

            <label>Onions
                <input
                    name='onions'
                    type='checkbox'
                    checked={values.onions}
                    onChange={onChange}
                />
            </label>

            <label>Ham
                <input
                    name='ham'
                    type='checkbox'
                    checked={values.ham}
                    onChange={onChange}
                />
            </label>

            <label>Pineapple
                <input
                    name='pineapple'
                    type='checkbox'
                    checked={values.pineapple}
                    onChange={onChange}
                />
            </label>

            <label>Special Instructions
                <input
                    id='special-text'
                    name='instructions'
                    type='text'
                    placeholder='Enter any special instructions here'
                    value={values.instructions}
                    onChange={onChange}
                />
            </label>

            <button id='order-button'>Add to Order</button>
        </form>
    )
}