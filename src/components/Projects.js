import parse from "html-react-parser";

export default function Projects({ project }) {
    let image = "";

    if (project._embedded && project._embedded["wp:featuredmedia"]) {
        image = project._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article>
        <img src={image} alt={project.title.rendered} />
        <h2>{parse(project.title.rendered)}</h2>
        {parse(project.content.rendered)}
    </article>
    );
}