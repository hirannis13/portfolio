import {useState, useEffect} from "react";
import Projects from "../components/Projects"

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://portfolio.dorikeczko.com/wp-json/wp/v2/projects?_embed");
            const data = await response.json();
						console.log(data);
            setProjects(data);
        }
        getData();
    }, []);
    return (
        <section className="grid-container">
        {projects.map(project => (
        <Projects key={project.id} project={project} />
        ))}
    </section>
    )
}