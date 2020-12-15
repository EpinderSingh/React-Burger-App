import React, { Fragment } from 'react';

const orderSummary = (props) => {
  const ingredientSummary = props.ingredients;
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul></ul>
    </Fragment>
  );
};

export default orderSummary;
