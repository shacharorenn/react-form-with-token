import React,{useState, useEffect} from 'react'
import TaskService from '../services/tasks.service'
import tasksService from '../services/tasks.service';


export default ({token}) => {

    const [todos, setTodos] = useState([]);
    
    useEffect(()=>{
        if(!token) return;
        TaskService.fetchTasks(token).then((newTodos) => {
            setTodos(newTodos);
        })
    }, [token]);
    

    return (
        <>
        {
            !token ? <h1>Unauthorized</h1> : (
                <ul className="list-group">
            {
                todos.map((singleTask) => {
                    return (
                        <li key={singleTask.id} className="list-group-item">
                            <h5>{singleTask.title}</h5>
                            <p>{singleTask.description}</p>
                        </li>                
                        )
                })
            }
        </ul>
            )
        }
        
       </>
    )
}