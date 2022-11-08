import '../App.css';
function Landing() {
    // return landing page
    // landing page contains a picture of me, a short description, and a button to go to the about page
    // also include a link to my resume, and a link to my github, linkedin, and email

    
    //github image with transparent background
    const githubImage = "https://cdn-icons-png.flaticon.com/512/25/25231.png";

    const linkedinImage = "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg";
    const emailImage = "https://cdn.worldvectorlogo.com/logos/gmail-icon.svg";
    const resumeImage = "https://www.freeiconspng.com/thumbs/resume-icon-png/resume-icon-png-15.png";

    return (
        <div className="landing">
            <h1>Mike Jeong</h1>
            <p>Computer Science and Applied Mathematics Student at New Jersey Institute of Technology</p>
            <div className="landing-links">
                <a href="https://github.com/TechnokingMike" target="_blank" rel="noopener noreferrer"><img src={githubImage} alt = "github"/> </a>
                <a href="https://www.linkedin.com/in/mikejeong22/" target="_blank" rel="noopener noreferrer"> <img src={linkedinImage} alt = "linkedIn" /> </a>
                <a href="mailto:technokingmike@gmail.com" target="_blank" rel="noopener noreferrer"> <img src={emailImage} alt="email" />  </a>
                <a href="https://drive.google.com/file/d/1r3scZfGh86jPTpARPY0NAoEgUJKIAJ1y/view?usp=sharing" target="_blank" rel="noopener noreferrer"> <img src={resumeImage} alt = "resume" /> </a>
            </div>
        </div>
    );

}

export default Landing;