import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodoList] = useState([]);
  const [flag, setFlag] = useState(false);
  const [submittedTodos, setSubmittedTodos] = useState([]);

  const handlechange = (input) => {
    const arr = [...todo];
    arr.push({
      id: todo.length + 1,
      text: input,
      completed: false,
    });
    setTodoList(arr);
    setInput("");
    console.log(arr);
  };

  const delteHandler = (index) => {
    const newArr = [...todo];
    newArr.splice(index, 1);
    setTodoList(newArr);
  };

  const submitHandler = () => {
    if (!flag) {
      const pending = todo.filter((t) => !t.completed);
      setSubmittedTodos(pending);
    }
    setFlag((prev) => !prev);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={() => handlechange(input)}>Add</button>
      </div>

      <ul>
        {todo.map((t, index) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => {
                const updatedTodos = [...todo];
                updatedTodos[index].completed = !updatedTodos[index].completed;
                setTodoList(updatedTodos);
              }}
            />

            <span className={t.completed ? "stripe" : ""}>{t.text}</span>
            <button onClick={() => delteHandler(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={() => submitHandler(flag)}>
        {flag ? "Undo" : "Submit your pending todo"}
      </button>

      {flag && (
        <div>
          {submittedTodos.length > 0 ? (
            <div>
              <h2>Pending Todos (Submitted):</h2>
              <ul>
                {submittedTodos.map((t) => (
                  <li key={t.id}>{t.text}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No pending todos submitted!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
