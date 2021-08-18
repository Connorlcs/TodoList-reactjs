import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCompo from './components/NavbarCompo';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <NavbarCompo />
      <Provider store={store}>  
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;