import PageHeaderContent from "../../components/PageHeaderContent";
import { FaBlackTie } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./styles.scss";

function Contact() {
  return (
    <section className="contact" id="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<FaBlackTie size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlsWrapper">
              <div className="nameWrapper">
                <input name="name" className="inputName" type={"text"} />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div className="emailWrapper">
                <input name="email" className="inputEmail" type={"email"} />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div className="descriptionWrapper">
                <textarea
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                  style={{ resize: "none" }}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Email
                </label>
              </div>
            </div>

            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
}

export default Contact;
