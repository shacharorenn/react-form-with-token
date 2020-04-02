import React,{useState} from 'react';
import Login from "./components/Login";
import Register from "./components/Register";
import TodoList from "./components/TodoList";

function App() {

  const [token,setToken] = useState("");

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Login tokenCb={setToken}/>
          </div>
          <div className="col-6">
            <Register tokenCb={setToken}/>
          </div>
          <div className="col-6">
            <TodoList token={token}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
