import React from 'react';
import Layout from './components/Layout/Layout';
import './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;
