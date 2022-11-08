import Project from "./Project";

function Projects() {
    // return projects in a div
    // contains project components
    // Proejct props contains project title, description, image, link to project, start and end dates, and technologies used
    // for start and end dates, use "Present" if project is ongoing and just display month and year

    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: ["This is a description of Project 1", "This is a second description of Project 1", "This is a third description of Project 1"],
            image: "https://via.placeholder.com/150",
            start: "January 2021",
            end: "Present",
            technologies: ["React", "JavaScript", "HTML", "CSS"]
        },
        {
            id: 2,
            title: "Project 2",
            description: ["This is a description of Project 2", "This is a second description of Project 2", "This is a third description of Project 2"],
            image: "https://via.placeholder.com/150",
            start: "January 2021",
            end: "Present",
            technologies: ["React", "JavaScript", "HTML", "CSS"]
        },

    ];

    


    return (
        <div className="projects">
            {projects.map((project) => (
                <Project
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    start={project.start}
                    end={project.end}
                    technologies={project.technologies}
                />
            ))}
        </div>
    );
}

export default Projects;