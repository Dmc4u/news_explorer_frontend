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
        <h1 className="about__title">About the author</h1>
        <p className="about__description">
          Moses Ademola Aina is a full-stack software developer specializing in
          the MERN stack. This project is the final submission for the TripleTen
          Software Engineering Bootcamp.
        </p>
        <p className="about__description">
          He’s passionate about building scalable web applications and enjoys
          solving real-world problems through code. This site showcases both
          frontend and backend engineering skills.
        </p>
      </div>
    </section>
  );
};

export default About;
