import parse from "html-react-parser";

export default function Projects({ project }) {
    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (project._embedded && project._embedded["wp:featuredmedia"]) {
        image = project._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article className="projectBox">
            <section className="projectLeft">
                <img src={image} alt={project.title.rendered} />
            </section>
            <section className="projectRight">
                <div className="projectTitle">
                    <h2>{parse(project.title.rendered)}</h2>
                </div>
                <div className="projectContent">
                    <span>{parse(project.content.rendered)}</span>
                </div>
                <div className="projectIcons">
                    <div>
                        {project.acf?.timeicon && <img className="icon" src={project.acf.timeicon.url} alt="timeicon" />}
                        <span className="details">{parse(project.acf.timetext)}</span>
                    </div>
                    <div>
                        {project.acf?.groupicon && <img className="icon" src={project.acf.groupicon.url} alt="groupicon"/>}
                        <span className="details">{parse(project.acf.grouptext)}</span>
                    </div>
                    <div>
                        {project.acf?.toolicon && <img className="icon" src={project.acf.toolicon.url} alt="toolicon"/>}
                        <span className="details">{parse(project.acf.firsttool)}</span>
                        <span className="details">{parse(project.acf.secondtool)}</span>
                        <span className="details">{parse(project.acf.thirdtool)}</span>
                        <span className="details">{parse(project.acf.fourthtool)}</span>
                    </div>
                    <div>
                        {project.acf?.linkicon && <img className="icon" src={project.acf.linkicon.url}  alt="linkicon"/>}
                        <a href={parse(project.acf.firstlinkurl)}  rel="noreferrer" target="_blank">{parse(project.acf.firstlink)}</a>
                        <a href={parse(project.acf.secondlinkurl)}  rel="noreferrer" target="_blank">{parse(project.acf.secondlink)}</a>
                        <a href={parse(project.acf.thirdlinkurl)}  rel="noreferrer" target="_blank">{parse(project.acf.thirdlink)}</a>
                        <a href={parse(project.acf.fourthlinkurl)}  rel="noreferrer" target="_blank">{parse(project.acf.fourthlink)}</a>
                    </div>
                </div>
            </section>
        </article>
    );
}
