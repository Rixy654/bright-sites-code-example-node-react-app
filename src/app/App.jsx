import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Homepage from './pages/Homepage';

const App = ({ store }) => (
  <Provider store={store}>
    <Homepage />
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
