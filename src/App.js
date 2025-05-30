import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodoList] = useState([
  ]);

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
    </div>
  );
}

export default App;
