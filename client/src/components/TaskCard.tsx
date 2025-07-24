export const TaskCard = (task) => {
    console.log(task);
    return(
        <div>
            <h1>{task.id}. {task.name}</h1>
            <p> {task.description} </p>
        </div>
    )
}

