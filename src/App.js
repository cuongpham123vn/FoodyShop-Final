//feature 1//
import React from 'react';
import data from "./data.json";
import Products from "./components/Products";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      category:"",
      sort:"", 
    };
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Foody Shop</a>
        </header>

        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">
              Cart Items
            </div>
          </div>
        </main>

        <footer>
          All Rights Reserved.© Foody Shop 2021
        </footer>

      </div>
    );
  }
}

export default App;

