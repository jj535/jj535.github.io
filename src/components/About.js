
function About() {
    // return some imformation about me
    // include a picture of me, school, major, etc.

    const counseworks = ["Computer network", "Computer security", "Database", "Operating system", "Software engineering", "Web development"];


    return (
        <div className="about">
            <h2>Education</h2>
            <p>
                <strong>New Jersey Institute of Technology</strong> <br/>
                <strong>Computer Science and Applied Mathematics</strong> <br/>
                <strong>Expected Graduation: December 2022</strong> <br/>
                GPA: 3.89/4.0 <br/>
                Relevant Coursework: {counseworks.map((course) => <li key={course}>{course}</li>)}
            </p>


            <h2>About me</h2>
            <p>
                I am a computer science and applied mathematics student at New Jersey Institute of Technology. I am passionate about software engineering and web development. I am also interested in machine learning and data science. I am currently looking for full-time opportunities starting in December 2022.
            </p>
        </div>
    );

}

export default About;
