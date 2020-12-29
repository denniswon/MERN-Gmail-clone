import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import EmailCategory from './components/EmailCategory/EmailCategory';
import styles from './style/App.module.css';
// import * as api from './api';
// ^ ^ ^ un-comment this to import api endpoints

function App() {
  // const [data, setData] = React.useState([]);
  // React.useEffect(() => {
  //   api
  //     .getSomething() // replace this with your endpoint
  //     .then((response) => console.log(`✅ ${response.status} ${response.statusText}`, setData(response.data)))
  //     .catch((error) => console.log(`❌ ${error}`));
  // }, []);
  //
  // ^ ^ ^ example using the api endpoint

  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Sidebar />
          <Switch>
            <Route exact path='/'>
              <EmailCategory />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
