import {useEffect, useState} from "react";
import {getAllTasks} from '../api/task.api.jsx'
import {TaskCard } from "./TaskCard.tsx";

interface Task {
    id: number;
    name: string;
    description: string;
}

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        console.log('TaskList');
        async function getTasks () {
            const res = await getAllTasks();
            console.log(res);
            setTasks(res.data);
        }
        getTasks();
    }, [])


    return (
        <div className="task-list">
            <h1>Task List 1</h1>
            {tasks.map((task: Task) => (
                <TaskCard task={task}/>
            ))}
        </div>
    )
}

export default TaskList;