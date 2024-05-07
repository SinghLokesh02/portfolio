import React from "react";

const Education = () => {
  return (
    <div className="my-5 md:w-[90%] m-auto w-full ">
      <div id="education" className="section-counter paralax-mf bg-image">
      <h5 className="title-left text-3xl font-bold p-3 text-center">
            Education
          </h5>
        <div className="row" style={{ width: "95%", margin: "auto" }}>
          <div className="col-sm-6" style={{ marginTop: 50 }}>
            <div className="card h-100">
              <div className="position-relative">
                <div
                  className="position-absolute top-0 start-0 translate-middle p-2  rounded-circle"
                  style={{
                    width: 70,
                    height: 70,
                    padding: 10,
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 57,
                  }}
                >
                  <img
                    src={require("../assets/img/images-education1.png")}
                    className="card-img-top rounded-top img-fluid"
                    style={{ width: "100%", height: "63%" }}
                    alt="not found"
                  />
                </div>
              </div>
              <div className="card-body" style={{ marginTop: 30 }}>
                <h5 className="card-title" style={{ color: "#d5c455" }}>
                  2020-2022
                </h5>
                <h3 style={{ fontSize: 24 }} className="font-serif">
                  {" "}
                  Master Degree in Computer Science
                </h3>
                <p
                  className="card-text font-medium text-md"
                  style={{ marginTop: 20, color: "#6a7a87" }}
                >
                  M.Sc. in Computer Science from Barkatullah University,
                  equipped with comprehensive knowledge in computer science
                  principles. Proficient in diverse areas including algorithms,
                  data structures, and software engineering, ready to contribute
                  effectively to innovative projects in the field.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6" style={{ marginTop: 50 }}>
            <div className="card h-100">
              <div className="position-relative">
                <div
                  className="position-absolute top-0 start-0 translate-middle p-2  rounded-circle"
                  style={{
                    width: 70,
                    height: 70,
                    padding: 10,
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 57,
                  }}
                >
                  <img
                    src={require("../assets/img/images-education1.png")}
                    className="card-img-top rounded-top img-fluid"
                    style={{ width: "100%", height: "63%" }}
                    alt="Loding Error"
                  />
                </div>
              </div>
              <div className="card-body" style={{ marginTop: 30 }}>
                <h5 className="card-title" style={{ color: "#d5c455" }}>
                  2017-2020
                </h5>
                <h3 style={{ fontSize: 24 }} className="font-serif">
                  {" "}
                  Bachelor Degree in Computer Science
                </h3>
                <p
                  className="card-text font-medium text-md"
                  style={{ marginTop: 20, color: "#6a7a87" }}
                >
                  Obtained a Bachelor's degree in Computer Science from
                  Barkatullah University, possessing foundational knowledge and
                  proficiency in computer science. Prepared to utilize acquired
                  skills to make meaningful contributions to pioneering projects
                  within the industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6" style={{ marginTop: 50 }}>
            <div className="card h-100">
              <div className="position-relative">
                <div
                  className="position-absolute top-0 start-0 translate-middle p-2  rounded-circle"
                  style={{
                    width: 70,
                    height: 70,
                    padding: 10,
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 57,
                  }}
                >
                  <img
                    src={require("../assets/img/images-education1.png")}
                    className="card-img-top rounded-top img-fluid"
                    style={{ width: "100%", height: "63%" }}
                    alt="Loding Error"
                  />
                </div>
              </div>
              <div className="card-body" style={{ marginTop: 30 }}>
                <h5 className="card-title" style={{ color: "#d5c455" }}>
                  2016-2017
                </h5>
                <h3 style={{ fontSize: 24 }} className="font-serif">
                  {" "}
                  Higher Secondary in Science ( MP Board)
                </h3>
                <p
                  className="card-text font-medium text-md"
                  style={{ marginTop: 20, color: "#6a7a87" }}
                >
                  Completed Higher Secondary education with a focus on
                  Mathematics from Govt. H.S School Pahadi Equipped with a
                  strong foundation in mathematical principles, ready to apply
                  skills in diverse academic and professional endeavors.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6" style={{ marginTop: 50 }}>
            <div className="card h-100">
              <div className="position-relative">
                <div
                  className="position-absolute top-0 start-0 translate-middle p-2  rounded-circle"
                  style={{
                    width: 70,
                    height: 70,
                    padding: 10,
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 57,
                  }}
                >
                  <img
                    src={require("../assets/img/images-education1.png")}
                    className="card-img-top rounded-top img-fluid"
                    style={{ width: "100%", height: "63%" }}
                    alt="Loding Error"
                  />
                </div>
              </div>
              <div className="card-body" style={{ marginTop: 30 }}>
                <h5 className="card-title" style={{ color: "#d5c455" }}>
                  2014-2015
                </h5>
                <h3 style={{ fontSize: 24 }} className="font-serif">
                  {" "}
                  Secondary School (MP Board)
                </h3>
                <p
                  className="card-text font-medium text-md"
                  style={{ marginTop: 20, color: "#6a7a87" }}
                >
                  Successfully completed secondary education under the MP Board
                  curriculum from Govt. H.S School Pahadi Equipped with a solid
                  academic foundation and practical skills, prepared to embark
                  on further educational pursuits or contribute to professional
                  endeavors with dedication and diligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
