function Skills() {
    // return my skills group them by category frontend, backend, database, tools, misc
    // return a list of skills for each category and show the count of each skill

    const list_skills = [
        {
            id: 1,
            category: "Frontend",
            skills: {"React": 3, "JavaScript": 3, "HTML": 3, "CSS": 3}
        },
        {
            id: 2,
            category: "Backend",
            skills: {"Python": 3, "Java": 3, "C++": 3, "C": 3}
        },
        {
            id: 3,
            category: "Database",
            skills: {"MySQL": 3, "MongoDB": 3, "PostgreSQL": 3, "SQLite": 3}
        },
        {
            id: 4,
            category: "Tools",
            skills: {"Git": null, "GitHub": null, "VSCode": null, "PyCharm": null}
        },
        {
            id: 5,
            category: "Misc",
            skills: {"Agile": null, "Scrum": null, "Jira": null, "Kanban": null}
        }
    ];

    return (
        <div className="skills">
            {list_skills.map((skill) => (
                <Skill
                    key={skill.id} 
                    category={skill.category}
                    skills={skill.skills}
                />
            ))}
        </div>
    );
                

}


function Skill(props) {
    return (
        <div className="skill">
            <h2>{props.category}</h2>
            <ul>
                {Object.keys(props.skills).map((sk) => (
                    <li key={sk}>{sk + (props.skills[sk] ? ": " +  props.skills[sk]: "")}</li>
                ))}
            </ul>
        </div>
    )
}

export default Skills;