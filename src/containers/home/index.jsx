import { useState } from "react";
import "./styles.scss";

const lettersArray = ["S", "a", "n", "g", "a", "m"];

function Home() {
  const [hover, onHover] = useState(null);
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          <span>Hi , I am</span>
          {lettersArray.map((letter, index) => (
            <span
              onMouseEnter={() => onHover(index)}
              onMouseLeave={() => onHover(null)}
              className = {index === hover && 'home__text-wrapper__span-active'}
            >
              {letter}
            </span>
          ))}
          <br />
          <span>Web Developer</span>
        </h1>
      </div>
    </section>
  );
}

export default Home;
