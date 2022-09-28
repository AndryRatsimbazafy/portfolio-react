import { useContext } from "react";
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";
const Home = () => {
  const { nav, changeNav } = useContext(NavContext);
  return (
    <section id="home" className={`${nav === "home" ? "active" : ""}`}>
      {/* Text Rotator Starts */}
      <div className="main-text-container">
        <img
          className="leftimagepicture"
          src={`img/andry.png`}
          alt=""
        />
        <div className="main-text" id="selector">
          <h3>Hi there !</h3>
          <AnimationText />
          <p>
            {`I'm`} Andry Patrick Ratsimbazafy. I’m a fullstack developer with 3
            YEARS of experiences, specialised in building (and occasionally
            designing) web or desktop applications. I have a master's degree
            (MBDS) from University Côte d'Asur of Nice, France. I also work as a
            Freelancer on software and game development. I gained experience in
            the area of development through the companies in which I worked.
          </p>
          <div className="call-to-actions-home">
            <div className="text-left">
              <a
                href="#about"
                onClick={() => changeNav("about")}
                className="btn link-portfolio-one"
              >
                <span>
                  <i className="fa fa-user" />
                  more about me
                </span>
              </a>
              <a
                href="#work"
                onClick={() => changeNav("work")}
                className="btn btn-secondary link-portfolio-two"
              >
                <span>
                  <i className="fa fa-suitcase" />
                  portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Text Rotator Ends */}
    </section>
  );
};
export default Home;
