import {useState, useEffect} from "react";
import Projects from "../components/Projects"

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://portfolio.dorikeczko.com/wp-json/wp/v2/projects?_embed&v=9999");
            const data = await response.json();
						console.log(data);
            setProjects(data);
        }
        getData();
    }, []);
    return (
        <main>
            <section className="projectIntro">
                <h2>What have I done so far?</h2>
                <p>In the past year I was mostly working on school projects, which gave me experience on different fields in Multimedia Design, such as programming, UX/UI, researching or design. Right now, my projects are and will be more focused on frontend development including react, firebase and web applications due to my specialization, but it doesn’t mean that I let go on the other parts. I still try to use from them as much as I can in my projects and improve myself in those fields.</p>
                <p>Through my study projects I could gain and learn a lot about how to be a team member, accommodate to others or find my skills which can complete a group. Besides I also had chance to work alone, which was rough at the beginning finding the best way to get the job done on my own, but time makes you master, and now I feel more comfortable trusting my decisions and overall working alone (like on this portfolio 😊). </p>
            </section>
            <section className="grid-container">
                {projects.map(project => (
                <Projects key={project.id} project={project} />
                ))}
            </section>
        </main>
    )
}