import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import AddStoreComponent from './components/addStore';
import LoginPage from './components/login';
import StorePage from './components/storeComponent';
import MedicinePage from './components/medicineComponent';
import AddMedicine from './components/AddMedicine'

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {LoginPage}></Route>
                          <Route path = "/store" exact component = {StorePage}></Route>
                          <Route path = "/medicinelist" component = {MedicinePage}></Route>
                          <Route path = "/add-store/:id" component = {AddStoreComponent}></Route>
                          <Route path = "/add-medicine/:id" component = {AddMedicine}></Route>
                    </Switch>
                </div>
              {/* <FooterComponent /> */}
        </Router>
    </div>
    
  );
}

export default App;
