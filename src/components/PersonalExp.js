import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import PersonalExpPopup from "./PersonalExpPopup";
import { persoExpData } from "../constant/data";

const PersonalExp = () => {
  const { nav } = useContext(NavContext);
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(persoExpData[value]);
  };
  return (
    <Fragment>
      <PersonalExpPopup open={modal} close={() => setModal(false)} data={activeData} />
      <section id="blog" className={`${nav === "blog" ? "active" : ""}`}>
        <div className="container page-title text-center">
          <h2 className="text-center">
            Personal <span>Projects</span>
          </h2>
          <span className="title-head-subtitle">
            Some personal project I've been working with my team or at the college
          </span>
        </div>
        <div className="container">
          <div className="row">
            {persoExpData.map((data, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(i)}>
                      <img className="img-fluid" src={data.img} alt="" />
                    </a>
                    {/* <div className="post-date">
                      {" "}
                      <span>{data.date.date}</span>
                      <span>{data.date.month}</span>
                    </div> */}
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(i)}>
                    <h4>{data.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data.des[0].substring(0, 50)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default PersonalExp;
