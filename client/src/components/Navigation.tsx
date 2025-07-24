import {Link} from "react-router-dom";

const Navigation = () => {
    return(
        <div>
            <h1>
                <Link to={'/tasks'}>
                    <h1>
                    Task app
                    </h1>
                </Link>
                <Link to={'/new-task'}>Create task</Link>
            </h1>
        </div>
    )
}

export default Navigation;