function Experiences() {

    const experiences = [
        {
            id: 1,
            title: "Undergraduate Research Assistant",
            company: "NJIT Data Analytics and Machine Intelligence Lab",
            location: "Newark, NJ",
            start: "February 2022",
            end: "August 2022",
            description: ["Installed Twitter user data using API for model training and stored the data into the MySQL database", 
            "Applied text CNN and BERT to implement a fake news detection library using python and tensorflow", 
            "Presented results for NJIT Undergraduate Summer Research Symposium"],
            technologies: ["React", "JavaScript", "HTML", "CSS"]
        },
        {
            id: 2,
            title: "Research Experience for Undergraduates",
            company: "Georgia Institute of Technology",
            location: "Atlana, GA",
            start: "June 2021",
            end: "July 2021",
            description: ["Researched asymptotic loss of overparameterized machine learning models", 
            "Used random forest with different parameters to show double gradient descent phenomenon", 
            "Delivered verbal summaries of academic papers twice weekly and created a poster summarizing findings"],
            technologies: ["React", "JavaScript", "HTML", "CSS"]
        },
        {
            id: 3,
            title: "Student Tutor",
            company: "NJIT ACM Tutoring Center",
            location: "Newark, NJ",
            start: "September 2020",
            end: "August 2022",
            description: ["Tutored a variety of computer science courses from introductory class to advanced algorithm class", 
            "Debugged students’ assignments and personal projects by analyzing their codes"],
            technologies: ["React", "JavaScript", "HTML", "CSS"]
        }
    ];

    return (
        <div className="experiences">
            {experiences.map((experience) => (
                <Experience
                    key={experience.id}
                    title={experience.title}
                    company={experience.company}
                    location={experience.location}
                    start={experience.start}
                    end={experience.end}
                    description={experience.description}
                    technologies={experience.technologies}
                />
            ))}
        </div>
    );
}


function Experience(props) {

    return (
        <div className="experience">
            <h2>{props.title}</h2>
            <h3>{props.company}</h3>
            <p>{props.location}</p>
            <p>{props.start} - {props.end}</p>
            <div className="experience-description">
                <ul>
                    {props.description.map((description) => (
                        <li key={description}>{description}</li>
                    ))}
                </ul>
            </div>
            <div className="experience-technologies">
                <ul>
                    {props.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                    ))}
                </ul>
            </div>
        </div>
    );


}

export default Experiences;