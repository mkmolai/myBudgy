import React from 'react';
import ToDo from './screens/ToDo';
import {BrowserRouter, Route, Link, useHistory} from 'react-router-dom';
import './style/main/main.css';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Behaviour from './screens/Behaviour';
import About from './screens/About';
import Register from './screens/Register';
import ViewList from './screens/ViewList';
import BudgyNavBar from './components/navbar/BudgyNavBar';
import BudgyContextProvider from './contexts/BudgyContext';
import Budgets from './screens/Budgets';
import Lists from './screens/Lists';
import ViewBudget from './screens/ViewBudget';
import LPILogo from './assets/LPILogo.png'

const BudgetApp = () => {


   


    return (
        <>
        <BudgyNavBar/>
        
        <BudgyContextProvider>
            <body >
                <BrowserRouter>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route  path="/todo" component={ToDo}/>
                    <Route  path="/profile" component={Profile}/>
                    <Route  path="/behavior" component={Behaviour}/>
                    <Route  path="/about" component={About}/>
                    <Route  path="/list/:id" component={ViewList}/>
                    <Route  exact={true}  path="/lists" component={Lists}/>
                    <Route  exact={true}  path="/budgets" component={Budgets}/>
                    <Route  exact={true} path="/budget/:id" component={ViewBudget}/>
                    {/* <Route  path="/set_month/:id" component={SetMonth}/> */}
                </BrowserRouter>
            </body>
        </BudgyContextProvider>
            <div className="footer text-center text-light">
                <img src={LPILogo} alt=""/>
            </div>
        </>
    )
}

export default BudgetApp
