import PageHeaderContent from "../../components/PageHeaderContent";
import { FaBlackTie } from "react-icons/fa";
import "./styles.scss";
function Contact() {
  return (
    <section className="contact" id="contact">
             <PageHeaderContent
          headerText="Contact Me"
          icon={<FaBlackTie color="white" size={40} />}
        /> 
    </section>
  );
}

export default Contact;
