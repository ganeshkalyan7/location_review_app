import React, { useState } from "react";

function TodoList() {
  const [task, setTaks] = useState([]);
  const [taskinput, settaskinput] = useState("");
  const handleEvents = (e) => {
    e.preventDefault();
    const newItem = { newtask: taskinput, id: Date.now() };
    setTaks((task) => [...task, newItem]);
    settaskinput("");
  };

  console.log(task);
  console.log(newDate().toLocaleString());

  const deleteItem = (id) => {
    setTaks(task.filter((itemid) => itemid.id !== id));
  };
  return (
    <div>
      <form onSubmit={handleEvents}>
        <input
          type="text"
          value={taskinput}
          onChange={(e) => settaskinput(e.target.value)}
        />
      </form>

      {task &&
        task.map((taskitem) => (
          <div key={taskitem.id}>
            <ul>
              <li>{taskitem.newtask}</li>
              <button onClick={() => deleteItem(taskitem.id)}>❌</button>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default TodoList;
