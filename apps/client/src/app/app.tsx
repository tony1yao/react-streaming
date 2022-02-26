import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header/header';
import StreamCreate from './streams/stream-create/stream-create';
import StreamDelete from './streams/stream-delete/stream-delete';
import StreamEdit from './streams/stream-edit/stream-edit';
import StreamList from './streams/stream-list/stream-list';
import StreamShow from './streams/stream-show/stream-show';

export function App() {
  return (
    <div>

      <BrowserRouter>
        <Header/>
        <div>
          <Route path='/' exact component={StreamList}></Route>
          <Route path='/streams/new' exact component={StreamCreate}></Route>
          <Route path='/streams/edit' exact component={StreamEdit}></Route>
          <Route path='/streams/delete' exact component={StreamDelete}></Route>
          <Route path='/streams/show' exact component={StreamShow}></Route>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
