import React from 'react'
import "./App.css"
import Header from './components/Header'
import Login from './components/Login'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import Jobs from './components/Jobs';
import data from "./database.json"
import JobContainer from './components/JobContainer'
import SignUp from './components/SignUp'

const App = () => {
  return (
    
    <Router>
      <Switch>
          <Route exact path="/login">
          <Header/>
            <Login />
            </Route>

            <Route exact path="/signup">
          <Header/>
            <SignUp />
            </Route>
            <Route path="/jobs">
          <Header/>
          <div className="content">
          <h1 className="heading">Featured Jobs</h1>
         
         <div id="jobs"> 
     {data.map((item)=>{
         return <JobContainer id={item.id}  src={item.src} title= {item.title} 
         />
     })}
       </div>
          </div>
       
            {/* <Jobs /> */}
            </Route>
          
          <Route path="/">
          <Header/>
            <Home />
          </Route>
        </Switch>
    
    </Router>
  )
}

export default App
