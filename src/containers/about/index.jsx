import React from "react";
import { FaBlackTie, FaLaptop } from "react-icons/fa";
import { GoDeviceDesktop } from "react-icons/go";
import { RiCodeView } from "react-icons/ri";
import { DiAndroid } from "react-icons/di";
import PageHeaderContent from "../../components/PageHeaderContent";
import "./styles.scss";

const personalDetails = [
  {
    label: "Name",
    value: "John Doe",
  },
  {
    label: "Age",
    value: "27",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "demo@example.com",
  },
  {
    label: "Contact No",
    value: "+11 3456789056",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<FaBlackTie color="white" size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <h3>Front End Developer</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
            nihil, corrupti ratione iure obcaecati debitis nisi porro non,
            consequatur nemo quasi perspiciatis voluptatem. Adipisci ad
            aspernatur repudiandae hic doloribus, dolorum similique deserunt.
            Voluptates numquam illum laborum earum similique nihil quae amet
            ratione, dolores magni aliquid pariatur ut quos quas id repellat
            nesciunt eum inventore veritatis! Pariatur nam tempora, voluptate,
            assumenda quo, officiis ab earum laboriosam repellendus aperiam
            minus voluptas quisquam sed doloribus architecto inventore illo.
            Iure ut esse adipisci illo debitis saepe sunt eius, deserunt unde,
            aspernatur accusamus suscipit libero beatae! Repellendus ratione
            quos blanditiis fuga voluptate! Facere quisquam neque vel quam
            repudiandae cum ut eveniet sit. Tempore, quod enim. Quasi culpa
            beatae deleniti enim, tempora architecto voluptates eligendi
            corrupti suscipit itaque minus voluptatem laborum qui nam nihil rem
            illo eius, nulla quam fugiat dignissimos libero exercitationem sint?
            Molestias quas commodi neque adipisci a autem iusto at, dicta
            nostrum distinctio.
          </p>
          <h3>Personal Information</h3>
          <ul>
            {personalDetails.map((item) => (
              <li key={item.label}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about__content__servicesWrapper">
        <h3>Services</h3>
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaLaptop color="#ffdd40" size={40} />
            </div>
            <div>
              <GoDeviceDesktop color="#ffdd40" size={40} />
            </div>
            <div>
              <RiCodeView color="#ffdd40" size={40} />
            </div>
            <div>
              <DiAndroid color="#ffdd40" size={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
