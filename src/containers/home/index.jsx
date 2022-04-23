import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./styles.scss";
import MyPdf from "../../resumeSample/Resume_Updated.pdf";
function Home() {
  const navigate = useNavigate();
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm John.
          <br />
          Front End Developer
        </h1>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(600px)",
          }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact-me">
            <div className="contact-me__buttons-wrapper">
              <button onClick={() => navigate("/contact")}>Hire Me</button>
              <a href={MyPdf} download="My_File.pdf">
                Download Resume
              </a>
            </div>
            <div className="contact-me__socials-wrapper">
              <FaLinkedin size={32} />
              <FaFacebook size={32} />
              <FaTwitter size={32} />
              <FaInstagram size={32} />
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
}

export default Home;
