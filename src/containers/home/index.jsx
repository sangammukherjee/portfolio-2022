import { Animate } from "react-simple-animate";
import {useNavigate} from 'react-router-dom'
import "./styles.scss";

function Home() {
  const navigate = useNavigate()
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
          {" "}
          <button onClick={()=>navigate('/contact')}>Hire Me</button>
        </Animate>
      </div>
    </section>
  );
}

export default Home;
