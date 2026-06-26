import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, toggleTask } from "./store/tasksSlice";
import { useState } from "react";

export default function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    // console.log("added task!!!!")
    if (input.trim()) {
      dispatch(addTask(input.trim()));
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-200 flex items-start justify-center pt-10">
      <div className="w-full max-w-md bg-cyan-300 flex flex-col rounded-xl p-4 gap-3">
        <h1 className="bg-cyan-500 text-center font-bold p-2 rounded-lg">
          Redux Task Manager
        </h1>
        <div className="flex items-center">
          <input
            className="flex-1 bg-cyan-100 text-center outline-none rounded-l p-2
          focus:bg-white focus:ring-2 focus:ring-cyan-500 transition-all duration-75"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            placeholder="Add a task..."
          />
          <button
            className="bg-cyan-900 text-white rounded-r px-4 py-2
          hover:bg-cyan-800 active:scale-95 transition-transform duration-75"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white flex items-center justify-between p-2 rounded-lg">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggleTask(task.id))}
                className="cursor-pointer w-4 h-4"
              />
              <span className={`flex-1 mx-2 ${task.completed ? "line-through text-gray-400" : ""}`}>
                {task.text}
              </span>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="text-red-400 hover:text-red-600 font-bold transition-colors duration-75"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
