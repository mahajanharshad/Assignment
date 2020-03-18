import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import store from './store';
import { createBrowserHistory } from 'history';

import App from './components/App/App';
import Content from './components/Content/Content';
import Flights from './components/Flights/Flights';
import Hotels from './components/Hotels/Hotels';
import Cars from './components/Cars/Cars';
import Filters from './components/Filters/Filters';
import Sort from './components/Sort/Sort';

ReactDOM.render((
  <Provider store={store}>
    <Router history={createBrowserHistory}>
      <Route>
        <Route path="/" component={App} />
        <Route path="/content" component={Content} />
        <Route path="/Flights" component={Flights} />
        <Route path="/Hotels" component={Hotels} />
        <Route path="/Cars" component={Cars} />
        <Route path="/Sort" component={Sort} />
        <Route path="/Filters" component={Filters} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
