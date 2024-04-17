import "./styles.css";
import React, { useRef, useState } from "react";
import { FaRegHandPeace } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { projects, skills } from "./data";
// import resume from "./jordanmoureauresume.pdf";

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <div className="hero">
        <div className="topper">
          <h2>Developer Profile</h2>

          <a href="./jordanmoureauresume.pdf" download>
            #Download Resume
          </a>
        </div>
        <div className="heroheader">
          <h1>
            Jordan Moureau <br /> Front-End Engineer
          </h1>
        </div>
      </div>

      <div className="bottomer">
        <h2 style={{ color: "white" }}>
          Currently open to work - Currently open to work - Currently open to
          work - Currently open to work - Currently open to work - Currently
          open to work - Currently open to work - Currently open to work
        </h2>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div className="aboutme">
        <h2 className="subheading">About Me</h2>
        <p className="subpara">
          Hey! 👋🏻 I'm <strong>Jordan</strong>, an aspiring Front-End Engineer
          out of eastern Washington where I live with my three kids and our dog.
          My <strong>favorite food</strong> is pork buns and my{" "}
          <strong>hobbies</strong> are reading, charcoal drawing and learning
          new languages (currently French 🍟 and Japanese 🍣).
          <br /> <br />
          Programming isn't something I thought I would be any good at, in fact
          I went to college for graphic design. While I was in school though I
          met <strong>a Ron Chan</strong>, Web Building I professor. He showed
          me that I not only could I write computer code, but also that{" "}
          <strong>I was actually kind of good at it</strong> ⭐️. From there I
          voraciously built the Front-End of websites. I hunted down neighbors
          and friends ("Do you need a website though? I can do that. Really
          though. Do you need one? Are you absolutely positive you don't need a
          website?"). I was totally <strong>hooked</strong>.
          <br />
          <br />
          As for now, I'm relentlessly pursuing{" "}
          <strong>my dream job, Professional Front-End Web Engineer</strong>. My
          daily life is squeezing out every spare moment of time for{" "}
          <strong>studying and building</strong> (with brief breaks for the
          current full-time job, the gym 🏋🏻‍♂️ and trader joes 🛒). It doesn't
          matter how long it takes because I'm doing what I love 💚: Building
          complex spaghetti bowls of logic, styling and html that can display on
          little electric screens <strong>anywhere</strong> in the world 🤩.{" "}
          <strong>*swoon</strong>
        </p>
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <h4 style={{ padding: "5px" }}>
        Projects - check out some of the things I’ve built
      </h4>
      <div className="projectcontainer">
        {projects.map((projects) => (
          <Project
            key={projects.project}
            image={projects.image}
            git={projects.git}
            link={projects.link}
            finished={projects.finished}
          />
        ))}
      </div>
    </>
  );
}

function Project({ image, git, link, finished }) {
  return (
    <div className="projects">
      <img src={image} alt={link} />
      <button>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "1em" }}
        >
          <h2>{finished ? "Live site /" : "Not"}</h2>
        </a>
      </button>
      <button>
        <a
          href={git}
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "1em" }}
        >
          <h2>{finished ? "git hub" : "Ready Yet"}</h2>
        </a>
      </button>
    </div>
  );
}

function Skills() {
  return (
    <div className="lightbeige">
      <div className="aboutme">
        <h2 className="subheading">Experience</h2>
        <p className="subpara">
          With two years of banking 💰 experience my{" "}
          <strong>attention to detail</strong> is top notch. I'm very organized
          and come <strong>pre-nerdified</strong> 🤓. I have three and a half
          years of college education, pursuing a <strong>graphic design</strong>{" "}
          degree.
          <br /> <br />
          Additionally I've finished the majortiy of{" "}
          <a
            href="https://www.codecademy.com/career-journey/front-end-engineer"
            style={{
              color: "inherit",
              fontSize: "inherit",
              textDecoration: "underline",
            }}
          >
            Codcademy's Front-End Engineer career path
          </a>
          ⭐️, I've also completed more than half of{" "}
          <a
            href="https://www.udemy.com/course/the-ultimate-react-course/learn/lecture/37350978?start=0#content"
            style={{
              color: "inherit",
              fontSize: "inherit",
              textDecoration: "underline",
            }}
          >
            Jonas Schmedtman's React Course on Udemy
          </a>{" "}
          ⭐️ as well as cultivating knowledge in various other places on the
          interwebs, following where gaps/curiosity takes me. Primarily my
          learning has been through <strong>building</strong> though. I'm very
          much a hands on learner, I can't learn if I'm not putting theory into
          practice. Building and re-building has been the{" "}
          <strong>key to mastery</strong> for me. I have always been an avid
          student at the <strong>school of hard knocks.</strong>
          <br />
          <br />
          <strong> Check out</strong> the rest of my courses and certificates on
          my{" "}
          <a
            href="https://www.linkedin.com/in/jordan-moureau-28b862255/"
            style={{
              color: "inherit",
              fontSize: "inherit",
              textDecoration: "underline",
            }}
          >
            linkedin
          </a>
          ! 🎓
        </p>
      </div>

      <SkillGrad />
      <Form />
    </div>
  );
}

function SkillGrad({ skill, sublevel }) {
  return (
    <div className="skillcontainer">
      {skills.map((skills) => (
        <Skill
          key={skills.skill}
          skill={skills.skill}
          sublevel={skills.sublevel}
          level={skills.level}
        />
      ))}
    </div>
  );
}

function Skill({ skill, sublevel, level }) {
  return (
    <>
      <div className="skillheader">
        <h2>{skill}</h2>
        <div className="skilllevel">{sublevel}</div>
      </div>

      <div className="temp" style={{ width: level + "%" }}></div>
    </>
  );
}

function Form() {
  const [user_name, setUserName] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const [successMsg, setSuccessMsg] = useState(false);

  const form = useRef();

  function clearState() {
    setUserName("");
    setUserEmail("");
    setMessage("");
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pu67tab",
        "template_8e9h1oq",
        form.current,
        "p7oN8NqSYov4ZfxyP"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setSuccessMsg(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h4 style={{ paddingBottom: "6vh" }}>
        Lets build something - contact me
      </h4>
      <input
        value={user_name}
        type="text"
        placeholder="Full name, please..."
        name="user_name"
        onChange={(e) => setUserName(e.target.value)}
        className={!user_name ? "black" : ""}
      />
      <input
        value={user_email}
        type="email"
        name="user_email"
        placeholder="Email address..."
        onChange={(e) => setUserEmail(e.target.value)}
        className={!user_email ? "black" : ""}
      />
      <textarea
        value={message}
        type="text"
        name="message"
        placeholder="Leave your message here..."
        onChange={(e) => setMessage(e.target.value)}
        className={!message ? "black" : ""}
      />
      <button
        type="submit"
        value="Send"
        className="formsubmit"
        {...(!user_name || !user_email || !message ? { disabled: true } : {})}
      >
        {!successMsg ? (
          "Submit"
        ) : (
          <FaRegHandPeace size={32} style={{ paddingTop: "5px" }} />
        )}
      </button>
    </form>
  );
}

function Footer() {
  return (
    <footer>
      <div className="row">
        <button className="download">
          <a href="./jordanmoureauresume.pdf" download>
            #download resume
          </a>
        </button>
      </div>
      {projects.map((projects) => (
        <ProjectLinks
          key={projects.project}
          link={projects.link}
          project={projects.project}
          lastOne={projects.lastOne}
        />
      ))}

      <div className="row" style={{ paddingTop: "10px" }}>
        <h2 style={{ color: "white" }}>made by Me. copyright me.</h2>
      </div>
    </footer>
  );
}

function ProjectLinks({ link, project, lastOne }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" style={{ color: "white" }}>
      {lastOne ? project : project + " | "}
    </a>
  );
}
