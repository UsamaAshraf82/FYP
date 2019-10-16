import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';

//import NotFoundPage from './pages/NotFoundPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>

        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/dashboard/profile' component={ProfilePage} />
        <Route path='/dashboard/tables' component={TablesPage} />
       
       
      </Switch>
    );
  }
}

export default Routes;
