import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BugerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
