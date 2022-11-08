

function Project(props) {
    // return individual project components in a div
    // props contains project title, description, image, link to project, start and end dates, and technologies used
    // contains tags for each technology used
    // inline css for project div 
    return (
        <div className="project">
            <h2>{props.title}</h2>
            <div className="project-description">
                <ul>
                    {props.description.map((description) => (
                        <li key={description}>{description}</li>
                    ))}
                </ul>
            </div>
            <p>{props.start} - {props.end}</p>
            <div className="project-technologies">
                <ul>
                    {props.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
    

}


export default Project;