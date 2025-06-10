import "./About.css";
import authorImage from "../../assets/images/author-image.jpg";

const About = () => {
  return (
    <section className="about">
      <img
        src={authorImage}
        alt="Moses Ademola Aina"
        className="about__image"
      />
      <div className="about__content">
        <h1 className="about__title">About the Author</h1>
        <p className="about__description">
          Moses Ademola Aina is a passionate full-stack software developer with
          expertise in the MERN stack. A lifelong learner and problem-solver, he
          completed this project as the final milestone of the TripleTen
          Software Engineering Bootcamp. Moses believes in the power of
          technology to create meaningful change, and he brings that belief to
          every line of code. With a deep appreciation for both front-end design
          and back-end architecture, he aims to build applications that are not
          only functional, but thoughtful, intuitive, and scalable.
        </p>
        <p className="about__description">
          This project reflects Moses’s dedication to crafting seamless digital
          experiences that empower users and solve real-world problems. From
          dynamic routing to secure API integration, each feature has been
          carefully engineered to showcase his full-stack capabilities. Ready to
          see it in action? Start exploring by searching for news articles using
          keywords like <strong>Nature</strong>, <strong>Technology</strong>,
          <strong>Politics</strong>, <strong>Health</strong>,{" "}
          <strong>Science</strong>, or <strong>Sports</strong>—and discover
          stories that matter to you.
        </p>
      </div>
    </section>
  );
};

export default About;
