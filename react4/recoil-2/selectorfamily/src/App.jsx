
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms'; // Import atomFamily from the atoms file
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Todo List</h1>
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={2} />
        <Todo id={2} />
      </div>
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const [todo] = useRecoilState(todosAtomFamily(id)); // Access the specific todo by id

  return (
    <div className="todo-item">
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
    </div>
  );
}

export default App;
