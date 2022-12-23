import './App.css';
import { AppUI } from './component/AppUi';
import { TodoProvider } from './component/TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
