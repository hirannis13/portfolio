import { Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";
import ProjectsPage from "./pages/ProjectsPage";
import "./index.css";

function App() {



    return (
        <main>
            <Nav />
            <Routes>
                <Route path="/home" element={<WelcomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </main>
    );
}

export default App;

