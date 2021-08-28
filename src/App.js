import React from 'react';
import store from "./store";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">Foody Shop</Link>
<<<<<<< HEAD

              <Link to="/about">About</Link>
             
              <Link to="/contact">Contact</Link>
              
              <Link to="/admin">Admin</Link>

              
=======
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/admin">Admin</Link>
>>>>>>> 11d016d12ec86a52d654a4bfbdbb11f6b28fa07e
            </header>

            <main>
              <Route path="/contact" component={ContactScreen} />
              <Route path="/about" component={AboutScreen} />
<<<<<<< HEAD
              <Route path="/admin" component={AdminScreen} />
=======
              <Route path="/admin" component={AdminScreen}/>
>>>>>>> 11d016d12ec86a52d654a4bfbdbb11f6b28fa07e
              <Route path="/" component={HomeScreen} exact/>
           
            </main>

            <footer>
              All Rights Reserved.© Foody-Shop 2021
            </footer>

          </div>
        </BrowserRouter>
      </Provider>
    );
  };
}

export default App;

