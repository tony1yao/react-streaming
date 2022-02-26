import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from './_data/reducers';

import App from './app/app';
import { Provider } from 'react-redux';

const store = createStore(reducers);

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
