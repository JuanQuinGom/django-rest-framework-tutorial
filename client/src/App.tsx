import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskPage from "./pages/TaskPage.tsx";
import TaskFormPage from "./pages/TaskFormPage.tsx";
import Navigation from "./components/Navigation.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path='/tasks' element={<TaskPage/>} />
                <Route path='/new-task' element={<TaskFormPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;