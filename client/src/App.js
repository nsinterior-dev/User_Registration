import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {Nav} from './components/nav';
import { EditUser } from './components/Edit';
import { NewUser } from './components/NewUser';
import { UserList } from './components/UserList';

function App() {
  return (
    <div className="App">
        <Router>
            <div className="container bg-light">
              <Switch>
                <Route path="/" exact component={Nav}/>
                <Route path="/userlist" exact component={UserList} />
                <Route path="/newuser" exact component={NewUser} />
                <Route path="/edituser" exact component={EditUser} />
              </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
