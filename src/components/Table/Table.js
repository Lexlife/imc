import React from 'react';
import formData from '../../models/formData.json';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from '../About/About';

const Table = () => {

  let arr = [];
  for (let key in formData) {
    arr.push(formData[key]);
  }

  return (
    <Router>
      <nav>
        <li className="pointRemove"><Link to="/">Home</Link></li>
        {arr[0].map(el => {
          return (
            <div key={Math.random() * 100000}>
              <table>
                <thead>
                <tr>
                  <th>
                    <ol key={Math.random() * 100000}>
                      <li><Link to={`/${el.id}`}>Name: {el._name}</Link></li>
                      <li><Link to={`/${el.id}`}>Sex: {el._sex < 2 ? 'male' : 'female'}</Link></li>
                    </ol>
                  </th>
                </tr>
                </thead>
              </table>
            </div>
          );
        })}
      </nav>
      <Switch>
        <Route path="/:id">
          <div>
            <About dataTable={arr} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default Table;
