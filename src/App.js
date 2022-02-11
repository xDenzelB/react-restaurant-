import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, NavLink, Route, Redirect, } from 'react-router-dom';
import AuthPage from './AuthPage';
import DetailPage from './DetailPage';
import ListPage from './ListPage';
import CreatePage from './CreatePage'; 
import UpdatePage from './UpdatePage';
import { getUser, logout } from './services/fetch-Utils';

export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetch() {
      const user = await getUser();

      if (user) setUser(user);
    }

    fetch();
  }, []);

  async function handleLogout() {
    await logout();
    setUser(null);
  }
  return (
    <Router>
      <div className="App">
        <header>
          {
            user && 
            <div>
              <NavLink activeClassName='link-edit' to='/restaurants'>List of Restaurants</NavLink>
              <NavLink activeClassName='link-edit' to='/create'>Create Restaurant</NavLink>
              <button onClick={handleLogout}>Logout</button>
            </div>
          }
        </header>
        <main>
          <Switch>
            <Route exact path ='/'>
              {
                user
                  ? <Redirect to='/restaurants' />
                  : <AuthPage setUser={setUser} />
              }
            </Route>
            <Route exact path='/restaurants'>
              {
                user
                  ? <ListPage />
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path='/restaurants/:id'>
              {
                user
                  ? <DetailPage />
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path='/create'>
              {
                user 
                  ? <CreatePage />
                  : <Redirect to='/'/>
              }
            </Route>
            <Route exact path='/update/:id'>
              {
                user 
                  ? <UpdatePage />
                  : <Redirect to='/' />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}


