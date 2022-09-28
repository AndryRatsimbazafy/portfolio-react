import { useContext } from "react";
import NavContext from "../context/navContext";
import { myData } from "../constant/data";
import { myWorkExperience } from "../constant/data";
import { myEducationExperience } from "../constant/data";
import { mySkills } from "../constant/data";
import { myDescription } from "../constant/data";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          I can help you with to create websites or apps.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                style={{ border: "5px solid #ffffff" }}
                className="img-fluid d-block"
                src="img/andry.png"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              {`I'm`} {myDescription.about}
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    {myData.prenom}
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    {myData.nom.toUpperCase()}
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Birthdate</span>
                    {myData.birthDate}
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    {myData.nationality}
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>
                    {myData.experience}
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Address</span>
                    {myData.address}
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    {myData.freelance}
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Langages</span>
                    {myData.languages}
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>
                    {myData.phone}
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    {myData.email}
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Skype</span>
                    {myData.skype}
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">LinkedIn</span>
                    {myData.linkedIn}
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a href="#" className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {myWorkExperience.map((item) => (
                  <div className="item">
                    <span className="bullet" />
                    <div className="card">
                      <div className="card-header">
                        <span className="year">
                          <i className="fa fa-calendar" />
                          <i className="fa fa-caret-right" />
                          {item.date}
                        </span>
                        <span className="d-block font-weight-400 uppercase">
                          {item.job}
                          <span className="separator" />
                          <span className="font-weight-700">
                            {item.company}
                          </span>
                        </span>
                      </div>
                      <div className="card-body">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education & Volunteering
              </h2>
              <div className="resume-items">
                {myEducationExperience.map((item) => (
                  <div className="item">
                    <span className="bullet" />
                    <div className="card">
                      <div className="card-header">
                        <span className="year">
                          <i className="fa fa-calendar" />
                          <i className="fa fa-caret-right" />
                          {item.date}
                        </span>
                        <span className="d-block font-weight-400 uppercase">
                          {item.degree}
                          <span className="separator" />
                          <span className="font-weight-700">
                            {item.college}
                          </span>
                        </span>
                      </div>
                      <div className="card-body">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            {mySkills.map((item) => (
              <div className="col-12 col-sm-6 col-md-4">
                <span className="skill-text">{item.name}</span>
                <div className="chart-bar">
                  <span
                    className="item-progress"
                    data-percent={item.value}
                    style={{ width: `${item.value}%` }}
                  />
                  <span
                    className="percent"
                    style={{ right: `calc(${(100 - item.value)}% - 21px)` }}
                  >
                    {item.value}%
                    <b className="arrow" />
                  </span>
                </div>
              </div>
            ))}
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
